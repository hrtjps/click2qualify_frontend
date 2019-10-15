import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }

  convertReqErr2String(jsonData) {
    let keys=[];
    Object.keys(jsonData).forEach(function (key) {
      keys.push(jsonData[key]);
    });
    return keys.length?keys[0]:"";
  }
}
