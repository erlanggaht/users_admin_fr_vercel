import { Box, Button, ButtonGroup, Drawer, DrawerBody, Spacer,Image,DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Stack, Text, useDisclosure, Link as LinkChakra, List, ListItem, ListIcon, Icon, Heading } from "@chakra-ui/react";
import style from '../../style.module.css'
import Link from "next/link";
import { useState } from "react";
import { HiServer,HiUser } from "react-icons/hi";
import axios from "axios";
import { localhost_port } from "@/app/page";
import styles from '../../style.module.css'


export function ListItemNav({getUser}) {
  return (
    <List spacing={2}>
  <ListItem>
    <ListIcon as={HiServer} color='red.500' />
    <LinkChakra onClick={getUser}><span style={{fontSize:"1rem",fontWeight:"normal"}}>Get Users </span></LinkChakra>
  </ListItem>
  </List>
  )
}


export default function navigasiHeader({token,name,getUsers}) {

  //Drawer Navigation
  const [size, setSize] = useState('')
  const [btnLoading,setBtnLoading] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleClick = () => {
    setSize('xs')
    onOpen()
  }

  //Logout
  async function HandleLogout() {
       
    if(!confirm('Yakin untuk keluar ?')){
      return false
    }


    const response = await axios.delete(`${localhost_port}/logout`,{
      withCredentials : true
    })
  location.href = '/'    
}

  return (
<>

    {/* Drawer Html */}
  <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
          <Stack direction='row' spacing={4} align='center' margin={'4px 0'}>
         
          <Text color={'#e91e3e'} fontSize={'16px'} fontWeight={'bold'}>{token ? 
          <>
          <span style={{color:"#222"}}>
            <Icon as={HiUser} color={'red.500'} /> Hello</span>, {name.split(' ')[0]}
            </>
            : ""}</Text> 
       
        {!token ? 
          <><Link href={'/signup'} rel="preload">
          <Button variant={"link"} color={'#e53e3e'} onClick={() =>setBtnLoading(true)}> Register </Button>  
             </Link> 
            <Link href={'/login'}> 
            <Button variant={'link'} color={'#e53e3e'}>Login</Button>
            </Link> </>  : ""
      }
          
     
           
           </Stack>
        
        <div style={{margin:"1rem 0px"}}>
          <ListItemNav getUser={getUsers}/>
          </div>

        {token &&
            <div className={style.logoutText}>
      <LinkChakra><Button fontSize={'md'} fontWeight={'semibold'} onClick={HandleLogout} variant={"ghost"}>Logout</Button> </LinkChakra> 
          </div> }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  {/* Close Drawer Html */}

    <div id="navigasiHeader">
      <div className={style.navigasi}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Flex alignItems={'center'} gap={'2'}>
        <Image
          borderRadius="full"
          boxSize="48px"
          src="https://res.cloudinary.com/djsizjaee/image/upload/v1683010530/samples/erlangga/IMG_2230_ulbomc.jpg"
          alt="Erlangga Hidayatullah"
        />         
        <Text color={'#e53e3e'} fontSize={'16px'} fontWeight={'bold'}>Portof.Me</Text>
        </Flex>
        </Box>
        <Spacer />
        <Box gap="2" className={styles.WelcomeHeading}>
        <Heading textAlign={"center"} as={'h2'} size={'lg'} >Welcome {name && 'back,'}<span style={{color:"#e53e3e"}}> {name.split(' ')[0]}</span></Heading>
          </Box>
        <Spacer />
        <Box gap="2">
        <ButtonGroup gap='0'>
        <Button
        onClick={() => handleClick(size)}
        key={size}
        m={1}
        variant={"ghost"}
      >Menu</Button>
      </ButtonGroup>
        </Box>
      </Flex>
      </div>
    </div>
    </>
  );
}
