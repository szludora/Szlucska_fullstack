export default class PublicView {
  constructor(list, parent, users) {
    this.parent = parent;
    this.list = list;
    this.users = this.users;
    parent.html(`<div class="row justify-content-center"></div>`);
    this.sorElem = this.parent.find(".row");
    this.makeHTML(list, users);
    // console.log(users);
    // console.log(list);
  }

  makeHTML(list, users) {
    let bg = ``;
    for (const k in list) {
      const e = list[k];
      // console.log("könyv:", e.title)
      // IDE ÍRTAM
      const elem = users[e.author_id - 1];
      for (const x in elem) {
        if (x == "name") {
          var author = elem[x];
        }
      }
      // console.log("író:", author)

      let txt = `
       <div class="konyv rounded p-1 m-5 col-sm-12 col-md-4 col-lg-2" style="position: relative">
          <div class="konyvAdatlap">`;
      txt += `
            <div class="cim fs-4">${e.title}<br><div class="szerzo fs-6">${author}</viv></div>`;
      if (e.evaluation < 4) {
        bg = `bg-danger`;
      } else {
        if (e.evaluation < 7) {
          bg = `bg-secondary`;
        } else {
          bg = `bg-success`;
        }
      }
      txt += `
            <div class="ertekeles fs-5 position-absolute top-0 start-100 translate-middle badge rounded-pill ${bg}">${e.evaluation}</div>`;
      txt += `
            <div class="leirasContainer"><img class="kep" src="../../imgs/books/${e.id}.jpg">`;
      txt += `
              <div class="slide">
                <div class="leiras mt-2 fs-6 fst-italic mb-2">${e.description}</div>
              </div>
            </div>`;
      txt += `
            <button class= "btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Kosárba</button>
          </div>`;
      this.sorElem.append(txt);
    }
  }
}
