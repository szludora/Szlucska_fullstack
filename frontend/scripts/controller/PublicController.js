import DataService from "../model/DataService.js";
import PublicView from "../view/PublicView.js";


export default class PublicController {
  constructor() {
    let ds = new DataService();
    ds.getDescriptor("literatures/descriptor", (desc) => {
      ds.getData("literatures", (list) => {
          let view = new PublicView(list, $(".termekek"));
          return view;
      });
    });
  }
}
