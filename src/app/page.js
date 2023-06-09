"use client";

import {  useEffect, useState } from "react";
import NavigasiHeader from "./dashboard/components/navigasiHeader.js";
import ToastStatusExample from "./dashboard/components/toastNotif.js";
import axios from "axios";
import jwtDecode from "jwt-decode";
import TableDatabase from "./dashboard/components/table_database.js";
import { Alert, AlertIcon, Heading, Spinner } from "@chakra-ui/react";
import LoadingData from "./dashboard/components/loading.js";
import ContextGlobal from "./dashboard/GlobalContext.js";
import styles from './style.module.css'



export default function Page() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expired, setExpired] = useState("");
  const [decodedJwt, setDecodedJwt] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  const [loadingPage,setLoadingPage] = useState('')
  const [toastNotif, setToastNotif] = useState({
    teks: "",
    status: "success",
    active: "",
  });

  
  useEffect(() => {
    
    async function timeFunc () {
    await  refreshToken() 
    setLoadingPage(false)
    
    }
    setTimeout(() => {
      setLoadingPage(true)
    },timeFunc())
    if (name) {
      setToastNotif({
        teks: "selamat datang kembali " + `${name}`,
        status: "success",
        active: true,
      });
    }
  }, [name]);


  const refreshToken = async () => {
  
    try {
      const response = await axios(`${process.env.URL_HOST}/token`, {
        withCredentials: true,
        method : 'GET'

      });
      setToken(response.data.accesstoken);
      const decoded = jwtDecode(response.data.accesstoken);
      setName(decoded.nama);
      setExpired(decoded.exp);
      setDecodedJwt(decoded)
    } catch (error) {
      if (error.response) {
        setToastNotif({
          teks: "anda belum masuk, silahkan login",
          status: "info",
          active: true,
        });
      }
    }
  };
  const fetchAPI = axios.create();

  fetchAPI.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expired * 1000 < currentDate.getTime()) {
        const response = await axios(`${process.env.URL_HOST}/token`, {
          method : "GET",
          withCredentials: true,
        });
        config.headers.Authorization = `Bearer ${response.data.accesstoken}`;
        setToken(response.data.accesstoken);
        const decoded = jwtDecode(response.data.accesstoken);
        setName(decoded.nama);
        setExpired(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  async function getUsers() {
    setLoading(true)
    try {
      const response = await fetchAPI.get(`${process.env.URL_HOST}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)  
      alert("tidak dapat melihat database kami, silahkan login");
        
    }
  }
  

  

   
  return (
    <>

    {/* Loading Awal Halaman */}
    {loadingPage ? <div className={styles.loadingPage}>
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    </div> : ""
}

    {/*  */}

    <ContextGlobal.Provider value={{getUsers,refreshToken,token}}>
      {/* Toast Notif */}
      {toastNotif.active ? <ToastStatusExample toastNotif={toastNotif} /> : ""}
      {/*  */}
      {loading &&<LoadingData/>}

      <NavigasiHeader token={token} name={name} getUsers={getUsers} />
      {!decodedJwt && 
        <div style={{padding:'1rem'}}>
        <Alert status="warning">
          <AlertIcon />
          Silahkan login di&nbsp; <span style={{textDecoration:'underline'}}> Menu </span>&nbsp;untuk melihat database kami
        </Alert>
        </div>
      }
      <Heading className={styles.WelcomeMobilePage} display={'none'} margin={'1rem'}  textAlign={"center"} as={'h2'} size={'lg'} >Welcome {name && 'back,'}<span style={{color:"#e53e3e"}}> {name.split(' ')[0]}</span></Heading>
      <TableDatabase data={data} decodedJwt={decodedJwt} />
      </ContextGlobal.Provider>
    </>
  );
}
