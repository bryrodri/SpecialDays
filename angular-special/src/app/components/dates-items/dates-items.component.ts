import { Component, HostBinding, Input, OnInit } from '@angular/core';

//clases
import { SpecialDate } from "../../clases/specialDate";

@Component({
  selector: 'app-dates-items',
  templateUrl: './dates-items.component.html',
  styleUrls: ['./dates-items.component.css']
})
export class DatesItemsComponent implements OnInit {
  @Input() specialDate:SpecialDate
  // @HostBinding('attr.class') cssClass="dates-container";
  @HostBinding('class') classes = 'dates-container';

  constructor() { }

  ngOnInit(): void {
  }

}
