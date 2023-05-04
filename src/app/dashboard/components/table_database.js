import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useBoolean,
} from "@chakra-ui/react";
import EditProfile from "../../edit-profile/edit-profile";
import { useState } from "react";
import DeleteProfile from "@/app/delete-profile/delete-profile";

export default function TableDatabase({ data,decodedJwt }) {
  const [hide,setHide] = useBoolean('')
  const [editProfile,setEditProfile] = useState(false)
  const [deleteProfile,setDeleteProfile] = useState(false)

 
  return (
<>
    {/* // Modal Edit Profile */}

    <EditProfile 
     editProfile={editProfile} 
     setEditProfile={setEditProfile} 
     decodedJwt={decodedJwt}
     />

    {/* // modal edit profile */}

    <div
      style={{
        textAlign: "center",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        margin: "3rem 0 1rem 0",
      }}
    >
        {data ? <TableContainer maxWidth={"100%"} textAlign={"center"} >
        <Table variant="simple">
          <TableCaption>
            Database Kami
            <Button colorScheme='red' variant='ghost' onClick={setHide.toggle} margin={"5px"}> {hide ? 'Show' : "Hide"} </Button>
            </TableCaption>
          <Thead>
            <Tr>
              <Th width={"15%"}>ID</Th>
              <Th>Nama</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody style={{display: hide ? "none" : "" }}>
            {data &&
              data.map((m, i) => {
                return (
             
                    <Tr key={i} >
                      <Td>{i+1}</Td>
                      <Td>{m.nama}</Td>
                      <Td>{m.email}</Td>
                      <Td><Button colorScheme="red" variant={'ghost'} onClick={() => setEditProfile(!editProfile && true)} isDisabled={m.nama === decodedJwt.nama ? false:true}>Edit</Button>
                      <Button colorScheme="red" variant={'ghost'} onClick={() => DeleteProfile(decodedJwt.email)} isDisabled={m.nama === decodedJwt.nama ? false:true}>Hapus</Button>
                      </Td>
                    </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer> : ""     
    }
      
    </div>
    </>
  );
}
