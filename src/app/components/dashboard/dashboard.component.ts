import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public signupmodalShow= false;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onCloseModal(change: boolean): void {
    this.signupmodalShow = false;
  }

  openSignupModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
