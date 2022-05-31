import {Component, HostListener} from '@angular/core';
import {User} from "./interfaces/user.interface";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {LowerCasePipe, TitleCasePipe} from "@angular/common";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'ANIL KUMAR'
  date =  new Date();



  numericValue = 2765775;
  form: FormGroup;
a = '';
b = '';
c = '';
  pTest: any [] = []
testA: any = `<a id="test-id">test</a>`

  @HostListener('click', ['$event.target']) onClick(e: any) {
    if(e.id === 'test-id'){
this.alertM();
    }
  }

  alertM(){
  alert('dsfdsf')
  }
  onSubmit(){
    console.log(this.form);
  }
constructor(private fb: FormBuilder, private sanitized: DomSanitizer, private lowercase: LowerCasePipe) {
  this.form = this.fb.group({
    description: ['male', Validators.pattern('.{0,100}')] // Assign the value name in the form control array
  })
    this.userName = this.lowercase.transform(this.userName);
    for(var i=0; i<=100; i++){
      this.pTest.push(i);
    }
  this.testA = this.sanitized.bypassSecurityTrustHtml(this.testA)
  //
  // this.assigningValues('ANIL', '2', '3');
  // this.printValues();
  //
  //  this.assigningValues('Kumar', '5', '6');
  //  this.printValues();
  //
  // this.assigningValues('Somasi', '8', '9');
  //  this.printValues();


}

assigningValues(aValue: string, bValue: string, cValue: string){
  this.a = aValue
  this.b = bValue
  this.c = cValue;
}


printValues(){
  console.log("****** sTART ******");
  console.log(this.a);
  console.log(this.b);
  console.log(this.c);
  console.log("****** eND ******");
}
}
