import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Weekendtrip } from '../weekendtrip';
import { ShowtripsService } from '../showtrips.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HolidaysComponent implements OnInit {
   weekEndTripList: Weekendtrip[];
  constructor(private service: ShowtripsService) { }

  ngOnInit() {
    this.service.findAll().subscribe(resp => this.weekEndTripList = resp);
  }

}
