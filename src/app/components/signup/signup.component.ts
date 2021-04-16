import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Input() show = false;
  @Output() public onCloseModal: EventEmitter<boolean> = new EventEmitter();
  public totalSchools = 0;
  public addSchoolModalShow = false;
  public school = {
    id: null,
    schoolId:null,
    name: null,
    phoneNumber: null,
    address: null,
    localAdministrators: null,
    localTechs: null,
    classrooms: []
  };
  public constructor(public modalService: NgbModal) { }

  ngOnInit(): void {

  }

  public addSchool(event): void {

  }

  public onCancel(event): void {
    event.preventDefault();
    this.onCloseModal.emit(false);
  }
}
