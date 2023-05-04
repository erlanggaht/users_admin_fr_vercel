"use client";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import styles from '../style.module.css'
import Link from "next/link";
import  validateLogin, { formikDisabledLogin }  from "./validate";
import { ErrorText } from "../signup/validate";
import ToastStatusExample from "../dashboard/components/toastNotif";
export const InputComponent = () => {

  const {formik,toastNotif} = validateLogin()
  const errorInput = formik.errors

  return (
    <>
      {/* Toast Notif */}
         {toastNotif.active ? <ToastStatusExample toastNotif={toastNotif} /> : ""}
      {/*  */}
    <form onSubmit={formik.handleSubmit}>
      <FormControl isRequired>
        <div className={styles.inputSignup}>
        <FormLabel>Email</FormLabel>
        </div>
        <div className={styles.inputSignup}>
        <Input placeholder="Masukan email" name={'email'} value={formik.values.email} onChange={formik.handleChange} />
        <ErrorText props={formik.errors.email}/>
        </div>
        <div className={styles.inputSignup}>
        <FormLabel>Password</FormLabel>
        <Input placeholder="Masukan password" name={'password'} value={formik.values.password} onChange={formik.handleChange}/>
        <ErrorText props={formik.errors.password}/>
        </div>
        <div className={styles.SubmitGroupButton}>
        <ButtonGroup variant="outline" spacing="2">
        <Link href={'/signup'} style={{padding:"6px"}}>Signup</Link>
        {!Object.keys(errorInput).length == 0 ?  <Button isDisabled colorScheme="red">Login</Button> : <Button type="submit" colorScheme="red">Login</Button>} 
        </ButtonGroup>
        </div>
       
      </FormControl>
      </form>
    </>
  );
};
