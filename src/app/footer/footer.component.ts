import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  parameter: string[];
  constructor() {this.parameter = ['Ola', 'Uber', 'Indigo', 'AirAsia'];
 }

  ngOnInit() {
  }

}
