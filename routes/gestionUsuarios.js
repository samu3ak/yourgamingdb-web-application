var express = require('express');
var router = express.Router();
var gestionUsuariosController = require("../controllers/gestionUsuariosController.js");
const md_auth = require("../middlewares/auth");

/* GET home page. */
router.get('/', [md_auth.userIsAdmin], gestionUsuariosController.gestionUsuarios);

module.exports = router;