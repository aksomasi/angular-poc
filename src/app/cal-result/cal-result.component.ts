import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../interfaces/user.interface";

@Component({
  selector: 'app-cal-result',
  templateUrl: './cal-result.component.html',
  styleUrls: ['./cal-result.component.css']
})
export class CalResultComponent implements OnInit {

  @Input() calNum1!: number;
  @Input() calNum2!: number;

  @Input() calResult!: number;

  @Output() resultToParent = new EventEmitter();

  user!: User;
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.resultToParent.emit(this.calNum1 + this.calNum2);
  }

}
