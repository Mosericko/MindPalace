const express = require("express");
const controller = require("../controllers/appLogic");
const router = express.Router();

router.get("/vault", controller.getAllIdeas);
router.post("/ideas", controller.postIdea);
router.get("/vault/:id", controller.retrieveInfo);
router.get("/vault/delete/:id", controller.deleteIdea);

module.exports = router;
