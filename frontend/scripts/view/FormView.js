export default class FormView {
  #formData={}
  constructor(parent) {
    parent.html("<form class='align-items-center m-auto bg-transparent'>");
    this.formElem = parent.find("form");
    this.makeHTML();
  }

  makeHTML() {
    let txt = `<div class="mb-4 m-auto">
          <input
            type="text"
            id="title"
            placeholder="Cím"
            name="title"
            class="form-control"
          />
        </div>
        <div class="mb-4 m-auto">
          <input
            type="number"
            class="form-control"
            id="evaluation"
            value="0.0"
            min="0.0"
            max="10.0"
            step="0.1"
            name="evaluation"
          />
        </div>
        <div class="mb-4 m-auto">
          <textarea rows="15" class="w-100"></textarea>
        </div>
        <div class="m-auto w-50">
          <input
            type="submit"
            id="submit"
            value="Küld"
            class="btn btn-success w-100"
          />
        </div>`;
    this.formElem.append(txt);
  }
  getInfoForm(){
    this.submitElem = this.formElem.find("#submit")
    this.titleElem =this.formElem.find("#title")
    this.evaElem = this.formElem.find("#evaluation")
    this.textArea = this.formElem.find("textarea")
    this.submitElem.on("click", (event)=>{
      event.preventDefault();
      this.#formData.title=this.titleElem.val()
      this.#formData.evaulation = this.evaElem.val()
      this.#formData.description = this.textArea.val()
      console.log(this.#formData)
    })
  }
}
