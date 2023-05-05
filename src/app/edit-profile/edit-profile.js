import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect, } from "react";
import * as Yup from "yup";
import isEmailValidator from "validator/lib/isEmail";
import { ErrorText } from "@/app/signup/validate";
import ContextGlobal from "../dashboard/GlobalContext";
import { localhost_port } from "../page";

export function validateUpdate(context) {
  const formik = useFormik({
    initialValues: {
      nama: "",
      email: "",
    },
    validationSchema: Yup.object({
      nama: Yup.string()
        .max(20, "maksimal 20 karakter")
        .min(5, "minimal 5 karakter")
        .required("nama harus di isi"),
      email: Yup.string()
        .email("email tidak valid")
        .required("email harus di isi")
        .test(
          "is-valid",
          (message) => `${message.path} is invalid`,
          (value) =>
            value
              ? isEmailValidator(value, {
                  allow_display_name: true,
                  require_tld: true,
                })
              : new yup.ValidationError("Invalid value")
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
      const update = axios(`${localhost_port}/update`, {
        headers: {
          ContentType: "application/json",
        },
        withCredentials: true,
        data: {
          nama: values.nama,
          email: values.email,
        },
        method: "put",
      });
      if (!update) alert("gagal update profile");
      if(update) context.getUsers()
      context.refreshToken()
    },
  });

  return formik;
}




export default function EditProfile({
  editProfile,
  setEditProfile,
  decodedJwt,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(ContextGlobal)

  const formik = validateUpdate(context);
  
  

  useEffect(() => {
    if (editProfile) onOpen();
  }, [editProfile]);

  function handleClose() {
    onClose();
    setEditProfile(false);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={formik.handleSubmit}>
          <ModalContent>
            <ModalHeader>Ubah Profile</ModalHeader>
            <ModalCloseButton onClick={() => setEditProfile(false)} />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nama Lengkap</FormLabel>
                <Input
                  name="nama"
                  placeholder={decodedJwt.nama}
                  onChange={formik.handleChange}
                  value={formik.values.nama}
                />
                <ErrorText props={formik.errors.nama} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  placeholder={decodedJwt.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <ErrorText props={formik.errors.email} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} type="submit">
                Simpan
              </Button>
              <Button onClick={() => handleClose()}>Kembali</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
