"use client";
import {
  Alert,
  AlertIcon,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import styles from '../style.module.css'
import Link from "next/link";
import  { ErrorText, formikValidate}  from "./validate.js";



export const InputComponent = () => {
  const {formik,alert} = formikValidate()
  const errorInput = formik.errors
  
 
  return (

    <>
    {alert ?      
    <Alert status='success'>
    <AlertIcon />
    Daftar berhasil. silahkan login
    </Alert> : <div style={{display:"none"}}></div>
}

    <form onSubmit={formik.handleSubmit}>
      <FormControl isRequired >
        <div className={styles.inputSignup}>
        <FormLabel>Nama Lengkap </FormLabel>
        <Input placeholder="Masukan nama lengkap" name={'nama'} value={formik.values.nama} onChange={formik.handleChange} />
        {formik.errors.nama ?  (
        <ErrorText props={formik.errors.nama}/>
      ) : null}
        </div>
        <div className={styles.inputSignup}>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Masukan email" name={'email'} value={formik.values.email} onChange={formik.handleChange} />
        <ErrorText props={formik.errors.email}/>
        </div>
        <div className={styles.inputSignup}>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Masukan password"  name={'password'} value={formik.values.password} onChange={formik.handleChange}/>
        <ErrorText props={formik.errors.password}/>
        </div>
        <div className={styles.inputSignup}>
        <FormLabel>Konfirmasi Password</FormLabel>
        <Input placeholder="Masukan konfirmasi password"   name={'konfirmasiPassword'} value={formik.values.konfirmasiPassword} onChange={formik.handleChange}/>
        <ErrorText props={formik.errors.konfirmasiPassword}/>
        </div>
        <div className={styles.SubmitGroupButton}>
        <ButtonGroup variant="outline" spacing="2">
        <Link href={'/login'} style={{padding:"6px"}}>Login</Link>
     {!Object.keys(errorInput).length == 0 ?  <Button isDisabled colorScheme="red">Signup</Button> : <Button type="submit" colorScheme="red">Signup</Button>} 
        </ButtonGroup>
        </div>
       
      </FormControl>
      </form>

    </>
  );
};
