import { Component, OnInit, Input } from '@angular/core';

export class MenuItem {
  iconCss: string;
  label: string;
  onClick?: any;
  link?: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
