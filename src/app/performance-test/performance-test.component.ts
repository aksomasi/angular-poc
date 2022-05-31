import {Component, Input, OnInit} from '@angular/core';
import {TestService} from "../test.service";

@Component({
  selector: 'app-performance-test',
  templateUrl: './performance-test.component.html',
  styleUrls: ['./performance-test.component.css']
})
export class PerformanceTestComponent implements OnInit {

  @Input() id: any;

  data: any;
  loader = false;
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.loader = true;
    this.testService.getAbbreviations().subscribe((value: any) => {
      this.loader = false;
      this.data = value[this.id];
    })
  }

}
