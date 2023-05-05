import {
  TableCaption,
  Button,
  useBoolean,
} from "@chakra-ui/react";
import EditProfile from "../../edit-profile/edit-profile";
import { useState } from "react";
import DeleteProfile from "@/app/delete-profile/delete-profile";
import * as React from "react";
import {
  Table as Tables,
  Thead as Theads,
  Tbody as Tbodys,
  Tr as Trs,
  Th as Ths,
  Td as Tds,
} from "../../table_responsive/index";
import "../../global.css";

export default function TableDatabase({ data, decodedJwt }) {
  const [hide, setHide] = useBoolean("");
  const [editProfile, setEditProfile] = useState(false);

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
     


{data &&  
<Tables variant="simple"  size="lg" >
        <TableCaption>
          Database Kami
          <Button
            colorScheme="red"
            variant="ghost"
            onClick={setHide.toggle}
            margin={"5px"}
          >
            {!hide ? "Show" : "Hide"}
          </Button>
        </TableCaption>
        {hide && 
        <Theads>
        <Trs >
          <Ths>ID</Ths>
          <Ths>Nama</Ths>
          <Ths>Email</Ths>
          <Ths>Action</Ths>
        </Trs>
      </Theads>
        }
        
        <Tbodys style={{  visibility: !hide ?  "hidden" : "visible" ,display:!hide && "none" }}>
          {data &&
            data.map((m, i) => {
              return (
                <Trs key={i}>
                  <Tds>{i + 1}</Tds>
                  <Tds>{m.nama}</Tds>
                  <Tds>{m.email}</Tds>
                  <Tds>
                    <Button
                      colorScheme="red.500"
                      variant={"ghost"}
                      onClick={() => setEditProfile(!editProfile && true)}
                      isDisabled={m.nama === decodedJwt.nama ? false : true}
                    >
                      Edit
                    </Button>
                    <Button
                      colorScheme="red.500"
                      variant={"ghost"}
                      onClick={() => DeleteProfile(decodedJwt.email)}
                      isDisabled={m.nama === decodedJwt.nama ? false : true}
                    >
                      Hapus
                    </Button>
                  </Tds>
                </Trs>
              );
            })}
        </Tbodys>
      </Tables>

}
            </div>
    </>
  );
}
