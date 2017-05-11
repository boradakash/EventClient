import { Component, OnInit } from '@angular/core';
import {EventService} from '../../service/event.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers:[EventService]
})
export class EventDetailComponent implements OnInit {
  event:any;
  errorMessage:string
  constructor( private route: ActivatedRoute,
    private router: Router,private eventService:EventService) { }

  ngOnInit() {
     this.route.params
      .switchMap((params: Params) => this.eventService.getEvent(+params['id']))
      .subscribe((event: any) =>{ this.event =event;console.log(event)});
  }

}
