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
const getCategoryProduct = require('../controller/product/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct');

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
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);

//user add to cart
router.post("/addtocart" , authToken, addToCartController);
router.get("/countAddToCartProduct",authToken,countAddToCartProduct);
router.get("/view-card-product", authToken, addToCartViewProduct)


module.exports = router