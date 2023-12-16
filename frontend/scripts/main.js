import TableController from "./controller/TableController.js";
import FormController from "./controller/FormController.js";
import DataService from "./model/DataService.js";

$(function () {
  let ds = new DataService();
  ds.getDescriptor("literatures/descriptor", (descriptor) => {
    let tableController = new TableController(ds,$(".tabla"), descriptor);
    let formController = new FormController(ds, $(".urlap"), descriptor);
  })
})