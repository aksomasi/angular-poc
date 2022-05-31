import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  num1!: number;
  num2!: number;

  result!: number;

  constructor() { }

  ngOnInit(): void {
  }
  showResult(event: any){
    this.result = event;
  }
  add(){
    this.result = this.num1 + this.num2;
  }
  div(){
    this.result = this.num1 / this.num2;
  }
}
