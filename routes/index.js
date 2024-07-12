const express = require('express');

const router = express.Router()

const userSignUpController = require("../controller/userSignUp");
const userSignInController = require('../controller/userSignIn');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const allUser = require('../controller/allUser');
const updateUser = require('../controller/updateUser');
const UploadController = require('../controller/uploadProduct');
const getProductController = require('../controller/getProduct');
const updateProductController = require('../controller/updateProduct');

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken,userDetailsController);
router.get("/userlogout", userLogout);


//admin panel
router.get('/all-user', authToken, allUser);
router.post("/update-user", authToken, updateUser)

//product
router.post("/upload-product", authToken, UploadController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);


module.exports = router