class TableHeadView {
    #obj;
    constructor(obj, parent) {
      this.#obj = obj;
      parent.html(this.create());
    }
    create() {
      let txt = `<tr>`;
      for (const key in this.#obj) {
        txt += `<th>${this.#obj[key]['label']}</th>`;
      }
      txt += `<th>Műveletek</th><th></th>`
      txt += `</tr>`;
      return txt;
    }
  }
  
  export default TableHeadView;