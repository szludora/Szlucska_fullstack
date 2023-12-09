import TableController from "./controller/TableController.js";
import FormController from "./controller/FormController.js";

$(function () {
  let tableController = new TableController();
  let formController = new FormController($(".urlap"));
});
