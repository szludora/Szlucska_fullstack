export default class PublicView {
  #formData = {};

  constructor(list, parent) {
    this.parent = parent;
    this.list = list;
    console.log(list);
    parent.html(`<div class="row"></div>`);
    console.log(parent);
    this.divElem = this.parent.find(".row");
    this.makeHTML(list);
  }

  makeHTML(list) {
    let bg = ``;
    for (const k in list) {
      const e = list[k];
      let txt = `<div class="p-1 col-sm-6 col-md-4 col-lg-3"><div class="konyv bg-light rounded p-2 m-4 " style="position: relative">`;
      txt += `<div class="cim fs-4">${e.title}</div>`;
      if (e.evaluation < 4) {
        bg = `bg-danger`;
      } else {
        if (e.evaluation < 7) {
          bg = `bg-secondary`;
        } else {
          bg = `bg-success`;
        }
      }
      txt += `<div class="ertekeles fs-6 position-absolute top-0 start-100 translate-middle badge rounded-pill ${bg}">${e.evaluation}</div>`;
      txt += `<div class="leiras mt-2 fs-6 fst-italic mb-2">${e.description}</div>`;
      txt += `<div class="kep mb-3"><img src="../../imgs/books/${e.id}.jpg"></div>`;
      txt += `<button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Kosárba</button></div></div>`;
      this.divElem.append(txt);
    }
  }
}
