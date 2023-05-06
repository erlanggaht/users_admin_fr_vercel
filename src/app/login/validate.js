import { useFormik } from "formik"
import * as Yup from 'yup'
import isEmailValidator from 'validator/lib/isEmail';
import axios from "axios";
import { useState } from "react";

export default function validateLogin() {
    const [loadingButton,setButtonLoading] = useState(false)
    const [toastNotif, setToastNotif] = useState({
        teks: "",
        status: "",
        active: false,
      });
    const formik = useFormik({
        initialValues : {
            email : "",
            password : ""
        },
        validationSchema : Yup.object({
            email : Yup.string().email('email tidak valid').required('email harus di isi')
            .test(
                "is-valid", (message) => `${message.path} is invalid`, 
                (value) => value ? isEmailValidator(value,{allow_display_name: true,require_tld:true}) : new yup.ValidationError("Invalid value")),
                password : Yup.string().min(8,'password minimal 8 karakter').required('password harus di isi').matches(/[a-zA-Z]/, 'Kata sandi hanya boleh berisi huruf latin'),
        }),
        onSubmit : async (values) => {
            setButtonLoading(true)
            const {email,password} = values
            await axios(`${process.env.URL_HOST}/login`,{
            method : "POST",
            data : {
                email : email,
                password : password
            },
            headers : {
                "Content-Type" : 'application/json',
            },
            withCredentials: true,
            }).then ((response)=> {
                if(response.status == 200 ){
                   console.log(response)
                }else {
                    setTimeout(()=>{
                        setToastNotif({
                            teks: 'Ada kesalahan',
                            status: "error",
                            active: true,
                          });
                    },0)
               
                }
            }).catch( error => {
                if(error){
                    setButtonLoading(false)
                    setToastNotif({
                            teks: error.response.data.msg,
                            status: "error",
                            active: true,
                          });
                   
                }
                setTimeout(()=>{
                    setToastNotif({
                        teks: "",
                        status: "",
                        active: false,
                    })
                    })
                },700)
               
              

        }
    })

    return {formik,toastNotif,loadingButton}
}