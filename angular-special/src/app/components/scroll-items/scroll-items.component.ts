import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//clases
import {SpecialDate} from '../../clases/specialDate'

//objetos de prueba
import { SPECIALDATES } from "../../objetos/specialDates";

@Component({
  selector: 'app-scroll-items',
  templateUrl: './scroll-items.component.html',
  styleUrls: ['./scroll-items.component.css']
})
export class ScrollItemsComponent implements OnInit {
  items:SpecialDate[]=SPECIALDATES
  @ViewChild('scrollSecction') section: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  elemento(x){
    console.log(x)
  }



  scrollLeft(){
    // this.section.nativeElement.scrollLeft -= 150;
    this.section.nativeElement.scrollTo({
      left: this.section.nativeElement.scrollLeft - 200,
      behavior: 'smooth',
    })

  }

  scrollRight(){
    // this.section.nativeElement.scrollLeft += 150;
    this.section.nativeElement.scrollTo({
      left: this.section.nativeElement.scrollLeft + 200,
      behavior: 'smooth',
    })
  }

}
