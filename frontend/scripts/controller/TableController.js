import TableView from "../view/table/TableView.js";

export default class TableController {
  constructor(ds, parent, descriptor) {
    this.ds = ds;

    this.ds.getData("literatures", (data) => {
      this.show(data,parent,descriptor);
    });

    $(window).on("deleteRow", (e) => {
      this.ds.delData("literatures", e.detail, (data) => {
        this.show(data,parent,descriptor);
      });
    });

    $(window).on("postSubmit", (e) => {
      this.ds.postData(e.detail, "literatures", (data) => {
        this.show(data,parent,descriptor);
      });
    });
  }

  show(list,parent, descriptor) {
    new TableView(list, parent, descriptor);
  }
  errorMessage(error) {
    console.log("Error message: ", error);
  }
}
