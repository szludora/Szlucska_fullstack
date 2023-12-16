export default class DataService {
  // static #instance
  constructor() {
    // DataService.#instance = this
    axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
  }

  // static getInstance() {
  //   return DataService.#instance;
  // }

  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  getDescriptor(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  postData(data, vegpont, callback) {
    axios
    .post(vegpont, data)
    .then(function (response) {
        //response data --> backenden írtuk
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
  putData(data, vegpont, id, callback) {
    let teljesVegpont = vegpont + "/" + parseInt(id)
    axios
    .put(teljesVegpont, data)
    .then(function (response) {
        //response data --> backenden írtuk
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  delData(vegpont, id, callback) {
    axios
      .delete(vegpont + "/" + id)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }
}
