import { Component, OnInit } from '@angular/core';
import {Config} from './list';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public lisData = new Config();
  // public loading:boolean = true;
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin:20,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      1200: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.lisData.newProduct[1])
    // this.showloading()
  }

  //  showloading(){
  //   setTimeout(()=>{
  //     this.loading= false
  //  },2000)
  //  }

}
