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
}
