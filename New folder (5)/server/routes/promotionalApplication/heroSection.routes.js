const Router = require("express");
const heroSectionController = require("../../controllers/promotionalApplication/heroSection.controller");
const heroSectionRouter = Router();

heroSectionRouter
  .route("/")
  .post(heroSectionController.createHeroSection)
  .get(heroSectionController.getAllHeroSections);

heroSectionRouter
  .route("/:id")
  .get(heroSectionController.getHeroSectionById)
  .put(heroSectionController.updateHeroSection)
  .delete(heroSectionController.deleteHeroSection);

module.exports = heroSectionRouter;
