'use client'
import styles from '../style.module.css'
import '../global.css'
import { InputComponent } from "./input_comp"
import { Heading } from '@chakra-ui/react'
import { getCookie } from 'cookies-next';

export default function signup () {
    return (

        <div id="login">
          <div className={styles.formInput}>
          <Heading textAlign={'center'} padding={'12px'}>Login</Heading>
          <InputComponent/>
          </div>
        </div>

  )
}