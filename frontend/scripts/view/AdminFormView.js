export default class AdminFormView {
  #formData = {};
  #authorName;

  constructor(parent, desc) {
    this.szerzoLista = [];
    this.formTheme =
      "<form class='align-items-center m-auto bg-transparent' id='form'></form>";
    this.parent = parent;
    this.parent.html(this.formTheme);
    this.formElem = parent.find("form");
    this.formElem.html("");
    this.makeHTML(desc);
    this.submitElem = this.formElem.find("#submit");
    this.collectDataFromForm();
  }

  makeHTML(desc) {
    let txt = "";
    for (const k in desc) {
      const e = desc[k];

      switch (e.label) {
        case "Id":
          txt += `<div class="mb-4 m-auto"><input id="${e.id}" class="${e.class}" placeholder="${e.id}" style="visibility: hidden;"/></div>`;
          break;
        case "AuthorId":
          txt += `<div class="mb-4 m-auto"><select id="selectAuthor" title="szerzok" class="form-control form-select">
          <option value="">Válassz a költők közül</option>
          </select></div>`;
          break;
      }
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
    txt += `<div class="m-auto w-50"><button id="submit" class="btn btn-success w-100">Küld</button></div>`;
    this.formElem.append(txt);
  }

  collectDataFromForm() {
    this.idElem = this.formElem.find("#id");
    this.submitElem = this.formElem.find("#submit");
    this.author_id = this.formElem.find("option:selected");
    this.titleElem = this.formElem.find("#title");
    this.evaElem = this.formElem.find("#evaluation");
    this.textArea = this.formElem.find("textarea");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      console.log(">>", $("option:selected").val());
      this.#formData.id = this.idElem.val();
      this.#formData.author_id = $("option:selected").val();
      this.#formData.title = this.titleElem.val();
      this.#formData.evaluation = this.evaElem.val();
      this.#formData.description = this.textArea.val();

      if (this.#formData.id) {
        console.log("put");
        this.trigger("putSubmit");
      } else {
        console.log("post");
        this.trigger("postSubmit");
      }
    });
  }

  trigger(e) {
    const event = new CustomEvent(e, { detail: this.#formData });
    window.dispatchEvent(event);
  }

  // e - element
  modifyThis(e, desc, ds) {
    this.formElem.find("#id").css("visibility", "visible");
    this.formElem.find("#author_id").css("visibility", "visible");
    this.formElem.find("#id").val(e.id);
    this.formElem.find("#title").val(e.title);
    this.formElem.find("#description").val(e.description);
    this.formElem.find("#evaluation").val(e.evaluation);
    this.formElem
      .find("#evaluation")
      .append(
        `<div class="m-auto w-50"><button id="submit" class="btn btn-success w-100">Küld</button></div>`
      );
    $("html").animate({ scrollTop: $("#form").offset().top }, 800);
    this.getUsersDropdown(ds, () => {
      this.formElem.find(`option[value="${e.author_id}"]`).prop("selected", "selected");
      this.formElem.find(`select`).val(e.author_id);
      this.collectDataFromForm();
    });
  }

  getUsersDropdown(ds, callback) {
    let txt = ``;
    ds.getData("users", (data) => {
      data.forEach((obj) => {
        if (this.szerzoLista.includes(obj.name)) {
        } else {
          let objektum = { id: obj.id, name: obj.name };
          this.szerzoLista.push(objektum);
          txt += `<option value="${obj.id}">${obj.name}</option>`;
        }
      });
      this.formElem.find("#selectAuthor").append(txt);
      // mivel hívom másik helyről is, ott nem használtam callbacket, ezért:
      if (callback != undefined) {
        callback();
      }
    });
  }
}
