import { Component, OnInit } from '@angular/core';
import {Config} from './list';
import {DataservieService} from '../_servies/dataservie.service'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list:any;
  public loading:boolean = true

  constructor( public servies:DataservieService) { }

  ngOnInit(): void {
      this.dataGet()
     console.log(this.list)
  }

    dataGet(){
           this.servies.getList().subscribe(data => {
            this.list = data;
            setTimeout(()=>{
               this.loading= false
            },1000)
           },
            error => {
               console.log('error')
               this.loading= true
            }
           )
           
    }

}
