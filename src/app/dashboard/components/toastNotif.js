import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"

export default function ToastStatusExample({toastNotif}) {
    const toast = useToast()
    const statuses = [toastNotif.status]
    useEffect(()=>{
    statuses.map((statuss,i) => {
        toast({
            title: `${toastNotif.teks}`,
            status: statuss,
            isClosable: true,
            duration : 2500
          })
    
    })
    },[])  
   
    
  }