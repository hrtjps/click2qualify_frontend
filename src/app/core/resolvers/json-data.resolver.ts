import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, merge, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class JsonDataResolver implements Resolve<any> {
  constructor(private http: HttpClient) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    if (!(route.data &&
      route.data.jsonData &&
      typeof route.data.jsonData === 'object' &&
      !Array.isArray(route.data.jsonData))) {
      throw new Error(`
              invalid JsonDataResolver usage
              make sure you define jsonData object in "${route.url}" route data object
              whith following structure
              {
                key: '/url/to/api/or/json/file'
              }
          `);

    }

    return forkJoin(
      Object.entries(route.data.jsonData)
        .map(([key, url]: [string, string]) =>
          this.http.get(url).pipe(map(data => [key, data]))
        )
    ).pipe(
      map((results: any) =>
        results.reduce((acc, [key, val]) => Object.assign(acc, { [key]: val }), {})
      )
    );
  }
}
