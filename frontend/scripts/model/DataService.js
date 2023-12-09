export default class DataService {
  constructor() {
    axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
  }
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

  postData(data, vegpont) {
    axios
      .post(vegpont, data)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
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
  // reloadAxios(vegpont) {
  //   axios.get(vegpont)
  //       .then(function (response) {
  //         console.log("reload", response.data)
  //          return response.data;
  //       })
  //       .catch(function (error) {
  //           console.error('Hiba történt a frissítés során:', error);
  //       });
}
// callback(vegpont,response){
//   console.log("CALLBACK:   \n", vegpont, "\n", response)
// }
