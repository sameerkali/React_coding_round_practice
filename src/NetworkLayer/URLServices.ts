import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
// import Constants, {storageKeys} from '../Resources/Constants';

import {Alert} from 'react-native';
import {EndPoints, storageKeys} from '../resources/Constants';

export default class URLService {
  request?: RequestInit;

  async fetchAsyncData(urlPath: string, dataToServer: any, method: string) {
    let headers = new Headers({
      // Accept: 'application/json',
      // 'Content-Type': 'application/json',

      //   ClientVersion: Constants.kCLIENTVERSION,
      //   AcceptLanguage: Constants.kHEADERLANGUAGE,
      Accept:
        dataToServer instanceof FormData
          ? 'application/x-www-form-urlencoded'
          : 'application/json',
      'Content-Type':
        dataToServer instanceof FormData
          ? 'multipart/form-data'
          : 'application/json',
    });

    await EncryptedStorage.getItem(storageKeys.kTOKEN).then(res => {
      if (res) {
        headers.append('Authorization', `Bearer ${res}`);
      }
    });

    switch (method) {
      case 'GET':
        this.request = {
          method: method,
          headers: headers,
        };
        break;

      case 'POST':
      case 'PUT':
      case 'DELETE':
        this.request = {
          method: method,
          headers: headers,
          body:
            dataToServer instanceof FormData
              ? dataToServer
              : JSON.stringify(dataToServer),
        };
        break;
    }

    if (urlPath.includes(EndPoints.VERIFY_OTP)) {
      this.request = {
        method: method,
        headers: headers,
        body: JSON.stringify(dataToServer),
      };
    }

    return fetch(urlPath, this.request).then(async response => {
      // if (!response.ok) {
      //   // try {
      //   //   await response.json().then(res => {
      //   //     console.log(res, 'HERE IS THE MESSAGE');
      //   //     this.checkStatusCode(response.status, res.error);
      //   //   });
      //   } catch (er) {
      //     console.log(er);
      //   }
      // }
      return response;
    });
  }

  checkStatusCode(statusCode: number, statusText: string) {
    switch (statusCode) {
      case 400:
        //Bad Request
        throw new CustomError(
          'Bad Request',
          'The resource owner or authorization server denied the request.',
        );
        break;
      case 401:
        throw new CustomError(
          'Unauthorized',
          'The resource owner or authorization server denied the request.',
        );
        break;
      case 404:
        throw new CustomError(
          'Not Found',
          'The resource owner or authorization server denied the request.',
        );
        break;
      case 405:
        throw new CustomError(
          'Invalid Method',
          'You have sent request with an invalid/wrong http method.',
        );
        break;
      case 500:
        throw new CustomError('Internal Server Error', statusText);
        break;
      case 501:
        throw new CustomError('Not Implemented', statusText);
        break;
      case 502:
        throw new CustomError('Bad Gateway', statusText);
        break;
      case 503:
        throw new CustomError('Service Unavailable', statusText);
        break;
      case 504:
        throw new CustomError('Gateway Timeout', statusText);
        break;
      case 505:
        throw new CustomError('HTTP Version Not Supported', statusText);
        break;
      default:
        break;
    }
  }
}

class CustomError extends Error {
  constructor(title: string, message: string) {
    super(message);
    this.name = title;
  }
}
