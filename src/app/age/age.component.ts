import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  name!: string;
  age!: undefined;

  result!: string;

  persons: any[] = [{name: 'test', age: 10}];


  constructor() {
   }


  save(){
  this.persons.push({name: this.name, age: this.age})
    this.name = '';
  this.age = undefined;
    console.log(this.persons)
  }

  calculateAgeStatus(age: any){
    if(age < 18 && age > 0){
      return 'Minor'
    }else if(age >=18){
      return 'Major'
    }
    return '';
  }
  ngOnInit(): void {
  }

}
