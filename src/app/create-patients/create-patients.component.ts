import {Component, OnInit} from '@angular/core';
import {Patient} from "../model/patient";
import {PatientsService} from "../service/patients.service";
import {Router} from "@angular/router";
import RandomPatientGenerator from "../random-patient-generator";

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.css']
})
export class CreatePatientsComponent implements OnInit {

  patient: Patient = new Patient();


  constructor(private patientService: PatientsService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.patientService.create(this.patient).subscribe(data => {
        this.router.navigate(['/patients'])
      },
      error => {
        console.log(error);
      }
    );

  }

  random() {
    this.patient = RandomPatientGenerator.generate();
  }

}
