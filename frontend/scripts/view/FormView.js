export default class FormView {
  #formData = {};

  constructor(parent, desc) {
    parent.html("<form class='align-items-center m-auto bg-transparent'>");
    this.formElem = parent.find("form");
    this.makeHTML(desc);
    this.getInfoForm();
  }

  makeHTML(desc) {
    let txt = "";
    for (const k in desc) {
      const e = desc[k];
      switch (e.type) {
        case "text":
          txt += `<div class="mb-4 m-auto"><input id="${e.id}" class="${e.class}" placeholder="${e.placeholder}"/></div>`;
          break;
        case "number":
          txt += `<div class="mb-4 m-auto"><input id="${e.id}" class="${e.class}" value="${e.value}" min="${e.min}" max="${e.max}" step="${e.step}"/></div>`;
          break;
        case "textarea":
          txt += `<div class="mb-4 m-auto"><textarea id="${e.id}" class="${e.class}" placeholder="${e.placeholder}" rows="${e.rows}"></textarea></div>`;
          break;
      }
    }
    txt += `<div class="m-auto w-50"><input type="submit" id="submit" value="Küld" class="btn btn-success w-100"/></div>`;
    this.formElem.append(txt);
  }

  getInfoForm() {
    this.submitElem = this.formElem.find("#submit");
    this.titleElem = this.formElem.find("#title");
    this.evaElem = this.formElem.find("#evaluation");
    this.textArea = this.formElem.find("textarea");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#formData.title = this.titleElem.val();
      this.#formData.evaulation = this.evaElem.val();
      this.#formData.description = this.textArea.val();
      this.trigger("postSubmit");
    });
  }

  trigger(e) {
    const event = new CustomEvent(e, { detail: this.#formData });
    window.dispatchEvent(event);
  }
}
