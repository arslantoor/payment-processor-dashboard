import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  public dropDownCollapse = false;
  public updatePremium = false;
  constructor() {
  }

  ngOnInit() {

  }
  collapseDropdown() {
    this.dropDownCollapse = !this.dropDownCollapse;
  }

  handleClickUpgradeAccount() {
    this.updatePremium = !this.updatePremium;
  }
  closeModal() {
    this.updatePremium = false;
  }

  dropdownToggle() {
    this.dropDownCollapse = false;
  }
}
