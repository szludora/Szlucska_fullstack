import AdminFormView from "../view/AdminFormView.js";
import TableView from "../view/table/TableView.js";

export default class TableController {
  constructor(ds, parent, descriptor) {
    this.ds = ds;

    this.ds.getData("literatures", (data) => {
      this.show(data, parent, descriptor);
    });

    $(window).on("deleteRow", (e) => {
      this.ds.delData("literatures", e.detail.id, (data) => {
        this.show(data, parent, descriptor);
      });
    });

    $(window).on("postSubmit", (e) => {
      this.ds.postData(e.detail, "literatures", (data) => {
        this.show(data, parent, descriptor);
      });
    });
    $(window).on("modify", (e) => {
      // $(window).off("postSubmit");
      let endPoint = "literatures/" + e.detail.id;
      this.ds.getData(endPoint, (data) => {
        let form = new AdminFormView($(".urlap"), descriptor);
        form.modifyThis(data, descriptor);
        $(window).on("putSubmit", (e) => {
          this.ds.putData(e.detail, "literatures", e.detail.id, (data) => {
            this.show(data, parent, descriptor);
          });
        });
      });
    });
  }

  show(list, parent, descriptor) {
    let form = new TableView(list, parent, descriptor);
    return form;
  }
  errorMessage(error) {
    console.log("Error message: ", error);
  }
}
