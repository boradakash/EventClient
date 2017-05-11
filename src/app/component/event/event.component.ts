import { Component, OnInit } from '@angular/core';
import {EventService} from '../../service/event.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[EventService]
})
export class EventComponent implements OnInit {
  events:any[]
  errorMessage:string
  constructor(private router: Router,private eventService:EventService) { }

  ngOnInit() {
    this.eventService.getEvents()
                     .subscribe(
                       events => {this.events =events;},
                       error =>  this.errorMessage = <any>error);
  }

  navigateToDetailPage(event:any){
    this.router.navigate(['/event-detail/', event.eventId]);
  }

}
