export default class AdminFormView {
  #formData = {};

  constructor(parent, desc) {
    this.formTheme =
      "<form class='align-items-center m-auto bg-transparent' id='form'></form>";
    this.parent = parent;
    this.parent.html(this.formTheme);
    this.formElem = parent.find("form");
    this.formElem.html("");
    this.makeHTML(desc);
    this.submitElem = this.formElem.find("#submit");
    this.getInfoForm();
  }

  makeHTML(desc) {
    let txt = "";
    for (const k in desc) {
      const e = desc[k];
      switch (e.type) {
        case "id":
          console.log(e)
        txt += `<div class="mb-4 m-auto"><input id="${e.id}" class="${e.class}" style="visibility: hidden"/></div>`;
          break;
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
    txt += `<div class="m-auto w-50"><button id="submit" class="btn btn-success w-100">Küld</button></div>`;
    this.formElem.append(txt);
  }

  getInfoForm() {
    this.idElem = this.formElem.find("#id");
    this.submitElem = this.formElem.find("#submit");
    this.authorElem = this.formElem.find("#authorId");
    this.titleElem = this.formElem.find("#title");
    this.evaElem = this.formElem.find("#evaluation");
    this.textArea = this.formElem.find("textarea");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#formData.id = this.idElem.val();
      this.#formData.author = this.authorElem.val();
      this.#formData.title = this.titleElem.val();
      this.#formData.evaulation = this.evaElem.val();
      this.#formData.description = this.textArea.val();

      if(this.#formData.id){
        console.log("put")
        this.trigger("putSubmit")
      }else{
        console.log("post")
        this.trigger("postSubmit");
      }
    });
  }

  trigger(e) {
    const event = new CustomEvent(e, { detail: this.#formData });
    window.dispatchEvent(event);
  }

  // e - element
  modifyThis(e, desc) {
    this.formElem.find("#id").css("visibility", "visible");
    this.formElem.find("#authorId").css("visibility", "visible");
    this.formElem.find("#id").val(e.id);
    this.formElem.find("#authorId").val(e.authorId);
    this.formElem.find("#title").val(e.title);
    this.formElem.find("#description").val(e.description);
    this.formElem.find("#evaluation").val(e.evaluation);
    this.formElem
      .find("#evaluation")
      .append(
        `<div class="m-auto w-50"><button id="submit" class="btn btn-success w-100">Küld</button></div>`
      );
    $("html").animate({ scrollTop: $("#form").offset().top }, 800);
    this.getInfoForm();
  }
}
