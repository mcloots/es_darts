export class Helpers {
  static convertDate(stringDate, locale) {
    moment.locale(locale);
    //What's coming in --> 2022-07-18 (YYYY-MM-DD)
    let dateArticle = moment(stringDate, "YYYY-MM-DD");
    return dateArticle.format("DD MMMM YYYY");
  }

  static saveToken(token) {
    this.clearToken();
    localStorage.setItem("token", token);
  }

  static clearToken() {
    localStorage.removeItem("token");
  }

  static isLoggedIn() {
    return localStorage.getItem("token") !== null;
  }
}
