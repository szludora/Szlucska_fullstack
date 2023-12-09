import DataService from "../model/DataService.js";
import TableView from "../view/table/TableView.js";

export default class TableController {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("literatures", this.show);
    $(window).on("deleteRow", (e) => {
      this.dataService.delData("literatures", e.detail, this.show);
    });
    $(window).on("postSubmit", (e) => {
      this.dataService.postData(e.detail);
    });
  }
  // reload() {
  //   location.reload()
  // }
  show(list) {
    new TableView(list, $(".tabla"));
  }
  reload(){
    this.show()
  }
  errorMessage(error) {
    console.log("Error message: ", error);
  }
}

