// import { descriptor } from "./descriptor.js";
// import DataService from "../../model/DataService.js";
import RowView from "./RowView.js";
import TableHeadView from "./TableHeadView.js";

class TableView {
  #list;
  constructor(list, parent, descriptor) {
    // this.ds = DataService.getInstance()
    this.descriptor = descriptor
    this.#list = list;
    parent.html(`
    <table class='table table-hover'>
    <thead></thead>
    <tbody></tbody>
    </table>`);
    this.table = parent.find("table");
    this.thead = parent.find("thead");
    this.tbody = parent.find("tbody");
    new TableHeadView(descriptor, this.thead);
    this.createTbody(this.tbody);
  }

  createTbody(parent) {
    this.#list.forEach((e, i) => {
      new RowView(e, i, parent);
    });
  }
}

export default TableView;