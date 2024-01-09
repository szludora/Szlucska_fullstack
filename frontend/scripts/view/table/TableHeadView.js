class TableHeadView {
    #obj;
    constructor(obj, parent) {
      this.#obj = obj;
      parent.html(this.create());
    }
    create() {
      let txt = `<tr>`;
      for (const key in this.#obj) {
        if(key != "author_id"){

          txt += `<th>${this.#obj[key]['label']}</th>`;
        }else{
          txt += `<th>${this.#obj[key]['placeholder']}</th>`;
        }
      }
      txt += `<th>Műveletek</th><th></th>`
      txt += `</tr>`;
      return txt;
    }
  }
  
  export default TableHeadView;