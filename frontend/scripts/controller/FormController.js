import FormView from "../view/FormView.js";

export default class FormController {
  constructor(ds, parent, desc) {
    this.ds = ds;
    this.form = new FormView(parent, desc);
 
  }
}
