export default class Book {
  constructor(data, parent) {
    this.data = data;
    this.parent=parent;
  }

  createBook(data) {
    let d = data;
    let bg = ``;
    let txt = `
       <div id="konyv" class="konyv rounded p-1 m-5 col-sm-12 col-md-4 col-lg-2" style="position: relative">
          <div id="konyvAdatlap">`;
    txt += `
            <div id="cim" class="cim fs-4">${d.title}<br><div id="szerzo" class="szerzo fs-6">${d["user"].name}</viv></div>`;
    if (d.evaluation < 4) {
      bg = `bg-danger`;
    } else {
      if (d.evaluation < 7) {
        bg = `bg-secondary`;
      } else {
        bg = `bg-success`;
      }
    }
    txt += `
            <div id="ertekeles" class="fs-5 position-absolute top-0 start-100 translate-middle badge rounded-pill ${bg}">${d.evaluation}</div>`;
    txt += `
            <div id="leirasContainer" class="leirasContainer"><img id="kep" src="../../imgs/books/${d.id}.jpg">`;
    txt += `
              <div class="slide">
                <div id="leiras" class="leiras mt-2 fs-6 fst-italic mb-2">${d.description}</div>
              </div>
            </div>`;
    txt += `<button class="btn btn-outline-primary shopButton"><i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Kosárba</button></div>`;
    return txt;
  }

  activateShopTrigger(){
    this.shopButton = this.parent.find(".shopButton :last").parent();
    this.shopButton.on("click", (e) => {
      this.trigger("shop");
    });
  }

  trigger(e) {
    const event = new CustomEvent(e, { detail: this });
    window.dispatchEvent(event);
  }

  getInfo() {
    return this.data;
  }

  getId() {
    return this.data.id;
  }

  getAuthId() {
    return this.data["user"].id;
  }
  getTitle() {
    return this.data.title;
  }

  getDesc() {
    return this.data.description;
  }

  getEva() {
    return this.data.evaluation;
  }

  getAuthName() {
    return this.data["user"].name;
  }
}
