const express = require('express');

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const authToken =  require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const allUser = require("../controller/user/allUser");
const updateUser = require('../controller/user/updateUser');
const UploadController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require('../controller/product/getCategoryProduct');

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
router.get("/get-categoryProduct", getCategoryProduct);


module.exports = router