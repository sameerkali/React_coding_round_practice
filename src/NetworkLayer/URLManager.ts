import URLService from "./URLServices";
import { EndPoints, baseUrl } from "../resources/Constants";
import { PhoneRequestBody } from "./Modals";

export default class URLManager {
  getData(data: number) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GETDATAENDPOINT + `${data}.json`;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "GET")
      .then((res: any) => res);
  }
  phoneLogin(data: PhoneRequestBody) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.PHONELOGIN;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, "POST")
      .then((res: any) => res);
  }
}
