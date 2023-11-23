import DataService from "../model/DataService.js";
import TableView from "../view/TableView.js";

export default class TableController {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("literatures", this.show);
    $(window).on("deleteRow", (e) => {
      console.log(e.detail);
      this.dataService.delData("literatures", e.detail, this.reload);
    });
    $(window).on("postSubmit", (e) => {
      this.dataService.postData(e.detail);
    });
  }
  reload() {
    location.reload()
  }
  show(list) {
    new TableView(list, $(".tabla"));
  }
  errorMessage(error) {
    console.log("Error message: ", error);
  }
}

