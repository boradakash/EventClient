import { Injectable } from '@angular/core';
import { Headers, Http,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class EventService {

  constructor(private http:Http) { }
  
  private eventUrl="http://localhost:65329/api/event";

  getEvents(): Observable<any[]> {
    return this.http.get(this.eventUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

 getEvent(id: number): Observable<any> {
	 	  const url = `${this.eventUrl}/${id}`;
	 	  return this.http.get(url)
		    .map(this.extractData)
	 	    .catch(this.handleError);
	 	}

  private extractData(res: Response) {
    debugger
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
 

}
