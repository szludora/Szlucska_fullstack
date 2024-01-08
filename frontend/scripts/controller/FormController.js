import AdminFormView from "../view/AdminFormView.js";

export default class FormController {
  constructor(ds, parent, desc) {
    this.ds = ds;
    this.form = new AdminFormView(parent, desc);
 
  }
}
