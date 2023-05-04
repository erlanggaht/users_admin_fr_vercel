exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 35638:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88588))

/***/ }),

/***/ 23088:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95958, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 48950, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 12513, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 81551, 23))

/***/ }),

/***/ 97857:
/***/ ((module) => {

// Exports
module.exports = {
	"formInput": "style_formInput__Nijrn",
	"SubmitGroupButton": "style_SubmitGroupButton__oI9gm",
	"inputSignup": "style_inputSignup__MEBxE",
	"navigasi": "style_navigasi__RRIOR",
	"footer": "style_footer__RH9rY",
	"logoutText": "style_logoutText___5Hm1"
};


/***/ }),

/***/ 81630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "text": () => (/* reexport default from dynamic */ _next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_weight_100_300_500_700_variableName_text___WEBPACK_IMPORTED_MODULE_2___default.a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54458);
/* harmony import */ var _next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_weight_100_300_500_700_variableName_text___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17039);
/* harmony import */ var _next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_weight_100_300_500_700_variableName_text___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_weight_100_300_500_700_variableName_text___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93851);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_providers__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Home",
    description: "next13"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        className: (_next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_weight_100_300_500_700_variableName_text___WEBPACK_IMPORTED_MODULE_2___default().className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_providers__WEBPACK_IMPORTED_MODULE_1__.Providers, {
                children: children
            })
        })
    });
}



/***/ }),

/***/ 93851:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// app/providers.tsx
/* __next_internal_client_entry_do_not_use__ Providers */ const { createProxy  } = __webpack_require__(21399);
module.exports = createProxy("D:\\----\\Ngoding\\Project\\NextJs\\Users\\src\\app\\providers.js");


/***/ }),

/***/ 33771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ToastStatusExample)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79594);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ToastStatusExample({ toastNotif  }) {
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__/* .useToast */ .p)();
    const statuses = [
        toastNotif.status
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        statuses.map((statuss, i)=>{
            toast({
                title: `${toastNotif.teks}`,
                status: statuss,
                isClosable: true,
                duration: 2500
            });
        });
    }, []);
}


/***/ }),

/***/ 8286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "localhost_port": () => (/* binding */ localhost_port)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-Z47J5YMH.mjs
var chunk_Z47J5YMH = __webpack_require__(58308);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs
var chunk_YTV6DHKL = __webpack_require__(44141);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/hooks/dist/chunk-CHB4ZXZG.mjs + 5 modules
var chunk_CHB4ZXZG = __webpack_require__(56585);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-VRAQ7LO3.mjs
var chunk_VRAQ7LO3 = __webpack_require__(10849);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs + 1 modules
var chunk_OWW5MU75 = __webpack_require__(43427);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-7PTKRZFZ.mjs + 1 modules
var chunk_7PTKRZFZ = __webpack_require__(87987);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs
var chunk_YLPWWAYV = __webpack_require__(10243);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs
var chunk_PVJ72NKC = __webpack_require__(24272);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs + 3 modules
var chunk_O5CRURSQ = __webpack_require__(44627);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs
var chunk_P74GIWPW = __webpack_require__(57661);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs
var chunk_DKFDJSXF = __webpack_require__(77288);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs + 3 modules
var chunk_NAA7TEES = __webpack_require__(91954);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs
var chunk_MPFPK3CX = __webpack_require__(30476);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs
var chunk_6CSUKJP7 = __webpack_require__(23918);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/image/dist/chunk-E77276RR.mjs + 2 modules
var chunk_E77276RR = __webpack_require__(9611);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-6FWJQRCB.mjs
var chunk_6FWJQRCB = __webpack_require__(97703);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs
var chunk_B2MGPQRJ = __webpack_require__(5064);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/chunk-PEYICJIL.mjs
var chunk_PEYICJIL = __webpack_require__(63889);
// EXTERNAL MODULE: ./src/app/style.module.css
var style_module = __webpack_require__(97857);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var index_esm = __webpack_require__(75655);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 45 modules
var axios = __webpack_require__(95085);
;// CONCATENATED MODULE: ./src/app/dashboard/components/navigasiHeader.js








function ListItemNav({ getUser  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(chunk_Z47J5YMH/* List */.aV, {
        spacing: 2,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_Z47J5YMH/* ListItem */.HC, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(chunk_Z47J5YMH/* ListIcon */.DE, {
                    as: index_esm/* HiServer */.HEw,
                    color: "red.500"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(chunk_YTV6DHKL/* Link */.r, {
                    onClick: getUser,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            fontSize: "1rem",
                            fontWeight: "normal"
                        },
                        children: "Get Users "
                    })
                })
            ]
        })
    });
}
function navigasiHeader({ token , name , getUsers  }) {
    //Drawer Navigation
    const [size, setSize] = (0,react_.useState)("");
    const [btnLoading, setBtnLoading] = (0,react_.useState)(true);
    const { isOpen , onOpen , onClose  } = (0,chunk_CHB4ZXZG/* useDisclosure */.q)();
    const handleClick = ()=>{
        setSize("xs");
        onOpen();
    };
    //Logout
    async function HandleLogout() {
        if (!confirm("Yakin untuk keluar ?")) {
            return false;
        }
        const response = await axios/* default.delete */.Z["delete"](`${localhost_port}/logout`, {
            withCredentials: true
        });
        location.href = "/";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_VRAQ7LO3/* Drawer */.d, {
                onClose: onClose,
                isOpen: isOpen,
                size: size,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_OWW5MU75/* ModalOverlay */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_7PTKRZFZ/* DrawerContent */.s, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_YLPWWAYV/* ModalCloseButton */.o, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_PVJ72NKC/* ModalBody */.f, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_O5CRURSQ/* Stack */.K, {
                                        direction: "row",
                                        spacing: 4,
                                        align: "center",
                                        margin: "4px 0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_P74GIWPW/* Text */.x, {
                                                color: "#e91e3e",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                children: token ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            style: {
                                                                color: "#222"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(chunk_DKFDJSXF/* Icon */.J, {
                                                                    as: index_esm/* HiUser */._K$,
                                                                    color: "red.500"
                                                                }),
                                                                " Hello"
                                                            ]
                                                        }),
                                                        ", ",
                                                        name.split(" ")[0]
                                                    ]
                                                }) : ""
                                            }),
                                            !token ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/signup",
                                                        rel: "preload",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                                                            variant: "link",
                                                            color: "#e53e3e",
                                                            onClick: ()=>setBtnLoading(true),
                                                            children: " Register "
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/login",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                                                            variant: "link",
                                                            color: "#e53e3e",
                                                            children: "Login"
                                                        })
                                                    }),
                                                    " "
                                                ]
                                            }) : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            margin: "1rem 0px"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ListItemNav, {
                                            getUser: getUsers
                                        })
                                    }),
                                    token && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (style_module_default()).logoutText,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_YTV6DHKL/* Link */.r, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                                                    fontSize: "md",
                                                    fontWeight: "semibold",
                                                    onClick: HandleLogout,
                                                    variant: "ghost",
                                                    children: "Logout"
                                                }),
                                                " "
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navigasiHeader",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (style_module_default()).navigasi,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_MPFPK3CX/* Flex */.k, {
                        minWidth: "max-content",
                        alignItems: "center",
                        gap: "2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_6CSUKJP7/* Box */.xu, {
                                p: "2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_MPFPK3CX/* Flex */.k, {
                                    alignItems: "center",
                                    gap: "2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_E77276RR/* Image */.E, {
                                            borderRadius: "full",
                                            boxSize: "48px",
                                            src: "https://res.cloudinary.com/djsizjaee/image/upload/v1683010530/samples/erlangga/IMG_2230_ulbomc.jpg",
                                            alt: "Erlangga Hidayatullah"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_P74GIWPW/* Text */.x, {
                                            color: "#e91e3e",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            children: "Portof.Me"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_6FWJQRCB/* Spacer */.L, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_B2MGPQRJ/* Heading */.X, {
                                textAlign: "center",
                                margin: "1rem",
                                as: "h2",
                                size: "lg",
                                children: [
                                    "Welcome ",
                                    name && "back,",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        style: {
                                            color: "#e53e3e"
                                        },
                                        children: [
                                            " ",
                                            name.split(" ")[0]
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_6FWJQRCB/* Spacer */.L, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_6CSUKJP7/* Box */.xu, {
                                gap: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_PEYICJIL/* ButtonGroup */.h, {
                                    gap: "0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                                        onClick: ()=>handleClick(size),
                                        m: 1,
                                        variant: "ghost",
                                        children: "Menu"
                                    }, size)
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/dashboard/components/toastNotif.js
var components_toastNotif = __webpack_require__(33771);
// EXTERNAL MODULE: ./node_modules/jwt-decode/build/jwt-decode.cjs.js
var jwt_decode_cjs = __webpack_require__(33802);
var jwt_decode_cjs_default = /*#__PURE__*/__webpack_require__.n(jwt_decode_cjs);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/hooks/dist/chunk-4EVXJTLA.mjs
var chunk_4EVXJTLA = __webpack_require__(30518);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/chunk-7FCBKWFD.mjs
var chunk_7FCBKWFD = __webpack_require__(31397);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/chunk-B3MS3L3D.mjs
var chunk_B3MS3L3D = __webpack_require__(75208);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/chunk-V3BNVYZO.mjs
var chunk_V3BNVYZO = __webpack_require__(78353);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/chunk-DJP6PLAX.mjs
var chunk_DJP6PLAX = __webpack_require__(48280);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/chunk-L7UVV2ML.mjs
var chunk_L7UVV2ML = __webpack_require__(21841);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/chunk-Z3IFIKNA.mjs
var chunk_Z3IFIKNA = __webpack_require__(71237);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/chunk-D3HTYHQX.mjs
var chunk_D3HTYHQX = __webpack_require__(78186);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/chunk-BLRPLYZO.mjs
var chunk_BLRPLYZO = __webpack_require__(68402);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs + 1 modules
var chunk_UUGUEMMH = __webpack_require__(7442);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs + 3 modules
var chunk_66WFFNY3 = __webpack_require__(39309);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-YBA5A33G.mjs
var chunk_YBA5A33G = __webpack_require__(88547);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/form-control/dist/chunk-6ZNYZUDD.mjs
var chunk_6ZNYZUDD = __webpack_require__(74872);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/form-control/dist/chunk-RN6VKE3K.mjs
var chunk_RN6VKE3K = __webpack_require__(64378);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs + 1 modules
var chunk_GYFRIY2Z = __webpack_require__(63309);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/modal/dist/chunk-YI7XFFAC.mjs
var chunk_YI7XFFAC = __webpack_require__(33235);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(6135);
// EXTERNAL MODULE: ./node_modules/yup/index.js
var node_modules_yup = __webpack_require__(58952);
// EXTERNAL MODULE: ./node_modules/validator/lib/isEmail.js
var isEmail = __webpack_require__(75248);
var isEmail_default = /*#__PURE__*/__webpack_require__.n(isEmail);
// EXTERNAL MODULE: ./src/app/signup/validate.js
var validate = __webpack_require__(37343);
;// CONCATENATED MODULE: ./src/app/dashboard/GlobalContext.js
const { createContext  } = __webpack_require__(18038);
const ContextGlobal = createContext();
/* harmony default export */ const GlobalContext = (ContextGlobal);

;// CONCATENATED MODULE: ./src/app/edit-profile/edit-profile.js










function validateUpdate(context) {
    const formik = (0,dist.useFormik)({
        initialValues: {
            nama: "",
            email: ""
        },
        validationSchema: node_modules_yup/* object */.Ry({
            nama: node_modules_yup/* string */.Z_().max(20, "maksimal 20 karakter").min(5, "minimal 5 karakter").required("nama harus di isi"),
            email: node_modules_yup/* string */.Z_().email("email tidak valid").required("email harus di isi").test("is-valid", (message)=>`${message.path} is invalid`, (value)=>value ? isEmail_default()(value, {
                    allow_display_name: true,
                    require_tld: true
                }) : new yup.ValidationError("Invalid value"))
        }),
        onSubmit: (values, { resetForm  })=>{
            resetForm();
            const update = (0,axios/* default */.Z)(`${localhost_port}/update`, {
                headers: {
                    ContentType: "application/json"
                },
                withCredentials: true,
                data: {
                    nama: values.nama,
                    email: values.email
                },
                method: "put"
            });
            if (!update) alert("gagal update profile");
            if (update) context.getUsers();
            context.refreshToken();
        }
    });
    return formik;
}
function EditProfile({ editProfile , setEditProfile , decodedJwt  }) {
    const { isOpen , onOpen , onClose  } = (0,chunk_CHB4ZXZG/* useDisclosure */.q)();
    const context = (0,react_.useContext)(GlobalContext);
    const formik = validateUpdate(context);
    (0,react_.useEffect)(()=>{
        if (editProfile) onOpen();
    }, [
        editProfile
    ]);
    function handleClose() {
        onClose();
        setEditProfile(false);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_UUGUEMMH/* Modal */.u_, {
            isOpen: isOpen,
            onClose: onClose,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(chunk_OWW5MU75/* ModalOverlay */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: formik.handleSubmit,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_66WFFNY3/* ModalContent */.h, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_YBA5A33G/* ModalHeader */.x, {
                                children: "Ubah Profile"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_YLPWWAYV/* ModalCloseButton */.o, {
                                onClick: ()=>setEditProfile(false)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_PVJ72NKC/* ModalBody */.f, {
                                pb: 6,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6ZNYZUDD/* FormControl */.NI, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_RN6VKE3K/* FormLabel */.l, {
                                                children: "Nama Lengkap"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_GYFRIY2Z/* Input */.I, {
                                                name: "nama",
                                                placeholder: decodedJwt.nama,
                                                onChange: formik.handleChange,
                                                value: formik.values.nama
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(validate/* ErrorText */.y, {
                                                props: formik.errors.nama
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_6ZNYZUDD/* FormControl */.NI, {
                                        mt: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_RN6VKE3K/* FormLabel */.l, {
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_GYFRIY2Z/* Input */.I, {
                                                name: "email",
                                                placeholder: decodedJwt.email,
                                                onChange: formik.handleChange,
                                                value: formik.values.email
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(validate/* ErrorText */.y, {
                                                props: formik.errors.email
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_YI7XFFAC/* ModalFooter */.m, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                                        colorScheme: "blue",
                                        mr: 3,
                                        type: "submit",
                                        children: "Simpan"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                                        onClick: ()=>handleClose(),
                                        children: "Kembali"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/delete-profile/delete-profile.js


async function DeleteProfile(decodedJwtEmail) {
    try {
        if (confirm("Yakin menghapus akun ?")) {
            const deleteUser = await axios/* default.delete */.Z["delete"](`${localhost_port}/delete`, {
                data: {
                    email: decodedJwtEmail
                },
                withCredentials: true
            });
            location.href = "/login";
        }
    } catch (error) {
        console.log({
            errorCatch: error
        });
    }
}

;// CONCATENATED MODULE: ./src/app/dashboard/components/table_database.js





function TableDatabase({ data , decodedJwt  }) {
    const [hide, setHide] = (0,chunk_4EVXJTLA/* useBoolean */.k)("");
    const [editProfile, setEditProfile] = (0,react_.useState)(false);
    const [deleteProfile, setDeleteProfile] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(EditProfile, {
                editProfile: editProfile,
                setEditProfile: setEditProfile,
                decodedJwt: decodedJwt
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    textAlign: "center",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    margin: "3rem 0 1rem 0"
                },
                children: data ? /*#__PURE__*/ jsx_runtime_.jsx(chunk_7FCBKWFD/* TableContainer */.x, {
                    maxWidth: "100%",
                    textAlign: "center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_B3MS3L3D/* Table */.i, {
                        variant: "simple",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_V3BNVYZO/* TableCaption */.R, {
                                children: [
                                    "Database Kami",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_NAA7TEES/* Button */.z, {
                                        colorScheme: "red",
                                        variant: "ghost",
                                        onClick: setHide.toggle,
                                        margin: "5px",
                                        children: [
                                            " ",
                                            hide ? "Show" : "Hide",
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_DJP6PLAX/* Thead */.h, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_L7UVV2ML.Tr, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_Z3IFIKNA.Th, {
                                            width: "15%",
                                            children: "ID"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_Z3IFIKNA.Th, {
                                            children: "Nama"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(chunk_Z3IFIKNA.Th, {
                                            children: "Email"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_D3HTYHQX/* Tbody */.p, {
                                style: {
                                    display: hide ? "none" : ""
                                },
                                children: data && data.map((m, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_L7UVV2ML.Tr, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_BLRPLYZO.Td, {
                                                children: i + 1
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_BLRPLYZO.Td, {
                                                children: m.nama
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_BLRPLYZO.Td, {
                                                children: m.email
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_BLRPLYZO.Td, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                                                        colorScheme: "red",
                                                        variant: "ghost",
                                                        onClick: ()=>setEditProfile(!editProfile && true),
                                                        isDisabled: m.nama === decodedJwt.nama ? false : true,
                                                        children: "Edit"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(chunk_NAA7TEES/* Button */.z, {
                                                        colorScheme: "red",
                                                        variant: "ghost",
                                                        onClick: ()=>DeleteProfile(decodedJwt.email),
                                                        isDisabled: m.nama === decodedJwt.nama ? false : true,
                                                        children: "Hapus"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i);
                                })
                            })
                        ]
                    })
                }) : ""
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@chakra-ui/alert/dist/chunk-RWQIUCJP.mjs
var chunk_RWQIUCJP = __webpack_require__(94594);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/alert/dist/chunk-TEHNKISS.mjs
var chunk_TEHNKISS = __webpack_require__(69106);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/skeleton/dist/chunk-3GRGLNAR.mjs + 2 modules
var chunk_3GRGLNAR = __webpack_require__(50349);
;// CONCATENATED MODULE: ./src/app/dashboard/components/loading.js


function LoadingData() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(chunk_3GRGLNAR/* Skeleton */.O, {
            startColor: "red.500",
            endColor: "orange.500",
            height: "20px"
        })
    });
}

;// CONCATENATED MODULE: ./src/app/page.js










const port = "3002";
const localhost_port = `https://users-admin-bk-vercel.vercel.app`;
function Page() {
    const [name, setName] = (0,react_.useState)("");
    const [token, setToken] = (0,react_.useState)("");
    const [expired, setExpired] = (0,react_.useState)("");
    const [decodedJwt, setDecodedJwt] = (0,react_.useState)("");
    const [data, setData] = (0,react_.useState)("");
    const [loading, setLoading] = (0,react_.useState)("");
    const [toastNotif, setToastNotif] = (0,react_.useState)({
        teks: "",
        status: "success",
        active: ""
    });
    (0,react_.useEffect)(()=>{
        refreshToken();
        if (name) {
            setToastNotif({
                teks: "selamat datang kembali " + `${name}`,
                status: "success",
                active: true
            });
        }
    }, [
        name
    ]);
    const refreshToken = async ()=>{
        try {
            const response = await axios/* default.get */.Z.get(`${localhost_port}/token`, {
                withCredentials: true
            });
            setToken(response.data.accesstoken);
            const decoded = jwt_decode_cjs_default()(response.data.accesstoken);
            setName(decoded.nama);
            setExpired(decoded.exp);
            setDecodedJwt(decoded);
        } catch (error) {
            if (error.response) {
                setToastNotif({
                    teks: "anda belum masuk, silahkan login",
                    status: "info",
                    active: true
                });
            }
        }
    };
    const fetchAPI = axios/* default.create */.Z.create();
    fetchAPI.interceptors.request.use(async (config)=>{
        const currentDate = new Date();
        if (expired * 1000 < currentDate.getTime()) {
            const response = await axios/* default.get */.Z.get(`${localhost_port}/token`, {
                withCredentials: true
            });
            config.headers.Authorization = `Bearer ${response.data.accesstoken}`;
            setToken(response.data.accesstoken);
            const decoded = jwt_decode_cjs_default()(response.data.accesstoken);
            setName(decoded.nama);
            setExpired(decoded.exp);
        }
        return config;
    }, (error)=>{
        return Promise.reject(error);
    });
    async function getUsers() {
        setLoading(true);
        try {
            const response = await fetchAPI.get(`${localhost_port}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data);
            setLoading(false);
        } catch (error) {
            alert("tidak dapat melihat database kami, silahkan login");
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GlobalContext.Provider, {
            value: {
                getUsers,
                refreshToken
            },
            children: [
                toastNotif.active ? /*#__PURE__*/ jsx_runtime_.jsx(components_toastNotif/* default */.Z, {
                    toastNotif: toastNotif
                }) : "",
                loading && /*#__PURE__*/ jsx_runtime_.jsx(LoadingData, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(navigasiHeader, {
                    token: token,
                    name: name,
                    getUsers: getUsers
                }),
                !token && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        padding: "1rem"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(chunk_RWQIUCJP/* Alert */.b, {
                        status: "warning",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(chunk_TEHNKISS/* AlertIcon */.z, {}),
                            "Silahkan login di\xa0 ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    textDecoration: "underline"
                                },
                                children: " Menu "
                            }),
                            "\xa0untuk melihat database kami"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(TableDatabase, {
                    data: data,
                    decodedJwt: decodedJwt
                })
            ]
        })
    });
}


/***/ }),

/***/ 88588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Providers": () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81855);
// app/providers.tsx


function Providers({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__/* .ChakraProvider */ .x, {
        children: children
    });
}


/***/ }),

/***/ 37343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ formikValidate),
/* harmony export */   "y": () => (/* binding */ ErrorText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57661);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6135);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58952);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75248);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95085);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8286);








const ErrorText = ({ props  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .x, {
            color: "#c53030",
            fontSize: "14px",
            textAlign: "right",
            padding: "6px 6px 0 6px",
            children: props
        })
    });
};
const formikValidate = ()=>{
    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
        initialValues: {
            nama: "",
            email: "",
            password: "",
            konfirmasiPassword: ""
        },
        validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__/* .object */ .Ry({
            nama: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().max(20, "maksimal 20 karakter").min(5, "minimal 5 karakter").required("nama harus di isi"),
            email: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().email("email tidak valid").required("email harus di isi").test("is-valid", (message)=>`${message.path} is invalid`, (value)=>value ? validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_6___default()(value, {
                    allow_display_name: true,
                    require_tld: true
                }) : new yup.ValidationError("Invalid value")),
            password: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().min(8, "password minimal 8 karakter").required("password harus di isi").matches(/[a-zA-Z]/, "Kata sandi hanya boleh berisi huruf latin"),
            konfirmasiPassword: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().oneOf([
                yup__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .iH("password"),
                null
            ], "konfirmasi password tidak cocok")
        }),
        onSubmit: (values)=>{
            const { nama , email , password , konfirmasiPassword  } = values;
            (0,axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(`${_page__WEBPACK_IMPORTED_MODULE_4__.localhost_port}/register`, {
                method: "POST",
                data: {
                    nama,
                    email,
                    password,
                    confirmPassword: konfirmasiPassword
                }
            });
            setAlert(true);
            formik.resetForm();
            setTimeout(()=>{
                setAlert(false);
                location.href = "/login";
            }, 1000);
        }
    });
    return {
        formik,
        alert
    };
};


/***/ })

};
;