const Router = require("express");
const ourServicesController = require("../../controllers/promotionalApplication/ourServices.controller");
const ourServicesRouter = Router();

ourServicesRouter
  .route("/")
  .post(ourServicesController.createOurService)
  .get(ourServicesController.getAllOurServices);

ourServicesRouter
  .route("/:id")
  .get(ourServicesController.getOurServiceById)
  .put(ourServicesController.updateOurService)
  .delete(ourServicesController.deleteOurService);

module.exports = ourServicesRouter;
