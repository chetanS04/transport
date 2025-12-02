const Router = require("express");
const templateController = require("../../controllers/promotionalApplication/templates.controller");
const templatesRouter = Router();

templatesRouter
  .route("/")
  .post(templateController.createTemplate)
  .get(templateController.getAllTemplates);

templatesRouter
  .route("/:id")
  .get(templateController.getTemplateById)
  .put(templateController.updateTemplate)
  .delete(templateController.deleteTemplate);

module.exports = templatesRouter;
