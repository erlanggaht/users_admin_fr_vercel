'use client'
import styles from '../style.module.css'
import '../global.css'
import { InputComponent } from "./input_comp"
import { Heading } from '@chakra-ui/react'

export default function signup () {
    return (
        <div id="signup">
          <div className={styles.formInput}>
          <Heading textAlign={'center'} padding={'12px'}>Register</Heading>
          <InputComponent/>
          </div>
        </div>

  )
}