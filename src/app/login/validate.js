import { useFormik } from "formik"
import * as Yup from 'yup'
import isEmailValidator from 'validator/lib/isEmail';
import axios from "axios";
import { useState } from "react";
import { localhost_port } from "../page";

export default function validateLogin() {
    const [loadingButton,setButtonLoading] = useState(false)
    const [toastNotif, setToastNotif] = useState({
        teks: "",
        status: "success",
        active: "",
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
        onSubmit : (values) => {
            setButtonLoading(true)
            const {email,password} = values
            axios(`${localhost_port}/login`,{
            method : "POST",
            data : {
                email : email,
                password : password
            },
            withCredentials: true,
            }).then ((response)=> {
                response.status === 200 ?  location.href = '/' : null
            }).catch(error => {
                if(error.response){
                    setButtonLoading(false)
                    setToastNotif({
                        teks: error.response.data.msg,
                        status: "error",
                        active: true,
                      });
                    setTimeout(()=>{
                        setToastNotif({
                            teks: error.response.data.msg,
                            status: "error",
                            active: false,
                          });
                    },0)
                }
                })
              

        }
    })

    return {formik,toastNotif,loadingButton}
}