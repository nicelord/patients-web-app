import {Component, OnInit} from '@angular/core';
import {Patient} from "../model/patient";
import {PatientsService} from "../service/patients.service";
import {ActivatedRoute, Router} from "@angular/router";
import RandomPatientGenerator from "../random-patient-generator";

@Component({
  selector: 'app-update-patients',
  templateUrl: './update-patients.component.html',
  styleUrls: ['./update-patients.component.css']
})
export class UpdatePatientsComponent implements OnInit {

  patient: Patient;

  selectedPid: string;

  constructor(private patientsService: PatientsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(value => {
      this.selectedPid = value['pid'];
      this.getDetail(this.selectedPid)
    })
  }

  private getDetail(pid: string) {
    this.patientsService.get(pid).subscribe(value => {
      this.patient = value;
    });
  }

  onSubmit() {
    this.patientsService.update(this.selectedPid, this.patient).subscribe(value => {
      this.router.navigate(['/patients'])
    })
  }

  random() {
    this.patient = RandomPatientGenerator.generate();
  }
}
