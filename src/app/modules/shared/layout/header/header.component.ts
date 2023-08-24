import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'This is a default header';

  numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  capitalText: string = 'capital text';
  titleText: string = 'title text';
  isoDate: string = '2012-07-14T01:00:00+01:00';
  price: number = 77.82;
  digit: number = 67.3847272;
  birthday: Date = new Date(1993, 1, 27);

  constructor() {}

  ngOnInit(): void {
    //this.title = 'This is a default header';
  }
}
