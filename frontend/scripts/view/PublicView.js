import Book from "./div/Book.js";

export default class PublicView {
  constructor(dsList, parent, ds) {
    this.ls = window.localStorage;
    this.bookList = [];
    this.ds = ds;
    this.myShopCart = [];
    this.parent = parent;
    this.dsList = dsList;
    this.parent = parent.html(`<div class="row justify-content-center"></div>`);
    this.finalParent = this.parent.find(".row");
    this.makeHTML();


    $(window).on("shop", (e) => {
      this.myShopCart.push(JSON.stringify(e.detail.data));
      console.log("myShopCart: ", this.myShopCart);
      this.ls.setItem("shopcart", this.myShopCart);
      console.log("ls, shopcart\n", this.ls.getItem("shopcart"));
    });
  }

  makeHTML() {
    this.dsList.forEach((element) => {
      let book = new Book(element, this.finalParent);
      this.finalParent.append(book.createBook(element));
      this.bookList.push(book);
      book.activateShopTrigger();
    });
  }

  getBook(i) {
    return this.bookList[i];
  }
}
