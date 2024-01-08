export default class PublicView {
  #formData = {};

  constructor(list, parent) {
    this.parent = parent;
    this.list = list;
    console.log(list)
    parent.html(`<div class="row"></div>`)
    console.log(parent)
    this.divElem = this.parent.find(".row")
    this.makeHTML(list);
  }

  makeHTML(list) {
    for (const k in list) {
      const e = list[k];
      let txt = `<div class="p-1 col-sm-6 col-md-4 col-lg-3"><div class="konyv bg-light rounded p-2 m-4 " style="position: relative">`;
          txt += `<div class="cim fs-4">${e.title}</div>`;
          txt += `<div class="ertekeles fs-6 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">${e.evaluation}</div>`;
          txt += `<div class="leiras mt-4 fs-6 fst-italic mb-5">${e.description}</div>`;
      txt += `<button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Kosárba</button></div></div>`;
      this.divElem.append(txt);
    }
  }

  getInfoForm() {
    this.idElem = this.divElem.find("#id");
    this.submitElem = this.divElem.find("#submit");
    this.titleElem = this.divElem.find("#title");
    this.evaElem = this.divElem.find("#evaluation");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#formData.id = this.idElem.val();
      this.#formData.title = this.titleElem.val();
      this.#formData.evaulation = this.evaElem.val();
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
  modifyThis(e, list) {
    this.divElem.find("#id").css("visibility", "visible");
    this.divElem.find("#id").val(e.id);
    this.divElem.find("#title").val(e.title);
    this.divElem.find("#description").val(e.description);
    this.divElem.find("#evaluation").val(e.evaluation);
    this.divElem
      .find("#evaluation")
      .append(
        `<div class="m-auto w-50"><button id="submit" class="btn btn-success w-100">Küld</button></div>`
      );
    $("html").animate({ scrollTop: $("#form").offset().top }, 800);
    this.getInfoForm();
  }
}
