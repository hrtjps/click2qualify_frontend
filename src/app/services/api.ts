import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Config } from "../config";



@Injectable()
export class APIService {

  resource : string;
  public URL = Config.APIURL;
  public httpOptions : any = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(public http: HttpClient) {
  
  }

  setResource(resource : string) {
      this.resource = resource;
  }

  create(data : any) {
    return this.http.post(this.URL + this.resource, data, this.httpOptions);
  }

  delete(id) {
    return this.http.delete(this.URL + this.resource + "/" + id, this.httpOptions);
  }

  edit(id , data : any) {
    return this.http.put(this.URL + this.resource + "/"  + id, data, this.httpOptions);
  }

  getAll() {
    return this.http.get(this.URL + this.resource, this.httpOptions);
  }

}
