import DataService from "../model/DataService.js";
import TableController from "./TableController.js";
import FormController from "./FormController.js";

export default class AdminController {
  constructor() {
    let ds = new DataService();
    ds.getDescriptor("literatures/descriptor", (descriptor) => {
      let tableController = new TableController(ds, $(".tabla"), descriptor);
      let formController = new FormController(ds, $(".urlap"), descriptor);
    });
  }
}
