import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient
  ) { }
  download(data) {
    return this.http.post('api/download-pdf', {data: "hello"});

  }
}
