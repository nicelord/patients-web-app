import {Component, OnInit} from '@angular/core';
import {Patient} from "../model/patient";
import {PatientsService} from "../service/patients.service";
import {Page} from "../model/page";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  page: Page;
  query: string;
  queryBy: string = 'byPid';


  constructor(private patientService: PatientsService) {
  }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients() {
    this.patientService.getPatients().subscribe(value => {
      this.page = value;
    });
  }

  changePage(page: number) {
    if (page > 0 && page <= this.page.totalPages) {
      if (this.query == undefined) {
        this.defaultList(page);
      } else {
        this.search(page);
      }

    }
  }

  private defaultList(page: number) {
    this.patientService.getPatients(page).subscribe(value => {
      this.page = value;
    });
  }

  search(page: number = 1) {
    if (this.query == undefined || this.query === '') {
      this.defaultList(page);
    }
    if (this.queryBy == 'byPid') {
      if (isNaN(Number(this.query))) {
        alert("please type number only!")
        return;
      }

      this.patientService.searchByPid(this.query, page).subscribe(value => {
        this.page = value;
      });
    } else {
      this.patientService.searchByName(this.query, page).subscribe(value => {
        this.page = value;
      });
    }


  }

  searchOptionHandler(event: any) {
    this.queryBy = event.target.value;
  }

  delete(pid: number) {
    this.patientService.delete(pid).subscribe(value => {
      }, error => {

      }, () => {
        this.changePage(this.page.currentPage);
      }
    )

  }
}
