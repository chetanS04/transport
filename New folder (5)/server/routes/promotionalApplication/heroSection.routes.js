const Router = require("express");
const multer = require("multer");
const heroSectionController = require("../../controllers/promotionalApplication/heroSection.controller");
const heroSectionRouter = Router();

const upload = multer();

heroSectionRouter
  .route("/")
  .post(upload.none(), heroSectionController.createHeroSection)
  .get(heroSectionController.getAllHeroSections);

heroSectionRouter
  .route("/:id")
  .get(heroSectionController.getHeroSectionById)
  .put(upload.none(), heroSectionController.updateHeroSection)
  .delete(heroSectionController.deleteHeroSection);

module.exports = heroSectionRouter;
