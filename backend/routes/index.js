
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const  ChangePassword = require('../controller/changedPassword');
const loginActivity = require('../controller/loginActivity');
const certificateCotroller = require('../controller/certificateController')

router.post('/DetailSaved', userController.saveDetail);
router.post('/updatePassword',ChangePassword.updatePassword)
router.post('/login',loginActivity.login)
router.post('/certificateDetails',certificateCotroller.userCertificate)

module.exports = router;
