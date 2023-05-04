import { Text } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from 'yup'
import isEmailValidator from 'validator/lib/isEmail';
import axios from "axios";
import { useState } from "react";
import { localhost_port } from "../page";




export const ErrorText = ({props}) => {
    return (
        <>
        <Text color={'#c53030'} fontSize={'14px'} textAlign={'right'} padding={'6px 6px 0 6px'}>
          {props}
        </Text>       
         </>
    )
}




export const formikValidate = () => {

    const [alert,setAlert] = useState(false)

    const formik = useFormik({
        initialValues : {
            nama : "",
            email : "",
            password : "",
            konfirmasiPassword : ""
        },
        validationSchema : Yup.object({
            nama : Yup.string().max(20,'maksimal 20 karakter').min(5,'minimal 5 karakter').required("nama harus di isi"),
            email : Yup.string().email('email tidak valid').required('email harus di isi')
            .test(
                "is-valid", (message) => `${message.path} is invalid`, 
                (value) => value ? isEmailValidator(value,{allow_display_name: true,require_tld:true}) : new yup.ValidationError("Invalid value")),
            password : Yup.string().min(8,'password minimal 8 karakter').required('password harus di isi').matches(/[a-zA-Z]/, 'Kata sandi hanya boleh berisi huruf latin'),
            konfirmasiPassword  : Yup.string().oneOf([Yup.ref('password'),null],'konfirmasi password tidak cocok')            
        }),
        onSubmit : (values) => {
            const {nama,email,password,konfirmasiPassword} = values
            axios(`${localhost_port}/register`,{
                method : "POST",
                data : {
                    nama,
                    email,
                    password,
                    confirmPassword : konfirmasiPassword
                }
            })
            setAlert(true)
            formik.resetForm()
            setTimeout(()=>{
                setAlert(false)
                location.href = '/login'
            },1000)
        }
    })
    return {formik,alert}
}
    
