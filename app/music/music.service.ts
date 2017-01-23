import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MusicService {
  constructor (private http: Http) {}
  private musicUrl: string = 'https://freemusicarchive.org/api/get/tracks.json?api_key=CX7L7BIO01PWCJCN';
  getMusic(): Observable<any> {
    return this.http.get(this.musicUrl)
      .map((res:Response) => {
        // console.log(123, res);
        // if (res && res.json)
          return res.json();
      })
      .catch((error: any) => {
      return Observable.throw(error.json().error || 'Server error');
        // console.log('error', error);
      });
  }
}
