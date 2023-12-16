class RowView {
  #obj = {};
  constructor(obj, index, parent) {
    this.#obj = obj;
    this.index = index;
    this.parent = parent;
    this.id = this.#obj.id;
    this.parent.append(this.createRow());
    this.deleteButton = this.parent.find(".deleteButton:last");
    this.deleteButton.on("click", (e) => {
      this.trigger("deleteRow");
    });
  }

  createRow() {
    let txt = `<tr>`;
    for (const key in this.#obj) {
      txt += `<td>${this.#obj[key]}</td>`;
    }
    txt += `<td><button class="deleteButton btn btn-danger">Törlés</button></td><td><button class="modifyButton btn btn-primary">Módosít</button></td></tr>`;
    return txt;
  }

  trigger(e) {
    const event = new CustomEvent(e, { detail: this.id });
    window.dispatchEvent(event);
  }
}
export default RowView;
