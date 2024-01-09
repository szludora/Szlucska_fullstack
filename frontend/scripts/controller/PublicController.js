import DataService from "../model/DataService.js";
import PublicView from "../view/PublicView.js";

export default class PublicController {
  constructor() {
    let ds = new DataService();
    ds.getDescriptor("literatures/descriptor", (desc) => {
      ds.getData("literatures", (bookList) => {
        ds.getData("users", (users) => {
          var view = new PublicView(bookList, $(".termekek"), ds);
          return view;
        });
      });
    });
}
}
