import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../model/patient";

class GenericPatientPostBody {
  pid: number;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  phone: string;
  street: string;
  suburb: string;
  state: string;
  postCode: string;

  static of(patient: Patient): GenericPatientPostBody {
    let createPatientBody = new GenericPatientPostBody();
    createPatientBody.firstName = patient.firstName;
    createPatientBody.lastName = patient.lastName;
    createPatientBody.gender = patient.gender;
    createPatientBody.dob = patient.dob;
    createPatientBody.phone = patient.phone;
    createPatientBody.street = patient.address.street;
    createPatientBody.suburb = patient.address.suburb;
    createPatientBody.state = patient.address.state;
    createPatientBody.postCode = patient.address.postCode;

    return createPatientBody;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private baseURL = "http://localhost:8080/v1/patients";

  constructor(private http: HttpClient) {
  }

  getPatients(page: number = 1): Observable<any> {
    let pageParam = new HttpParams().set('page', page);
    return this.http.get(`${this.baseURL}`, {
      params: pageParam
    });
  }

  searchByPid(queryBy: string, page: number): Observable<any> {
    let params = new HttpParams()
      .set('pid', queryBy)
      .set('page', page);

    return this.http.get(`${this.baseURL}/searchByPid`, {
      params: params
    });
  }

  searchByName(queryBy: string, page: number): Observable<any> {
    let params = new HttpParams()
      .set('name', queryBy)
      .set('page', page);

    return this.http.get(`${this.baseURL}/searchByName`, {
      params: params
    });
  }

  delete(pid: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${pid}`);
  }

  create(patient: Patient): Observable<any> {

    return this.http.post(`${this.baseURL}`, GenericPatientPostBody.of(patient));

  }

  get(pid: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${pid}`);
  }

  update(selectedPid: string, patient: Patient): Observable<any> {
    return this.http.put(`${this.baseURL}/${selectedPid}`, GenericPatientPostBody.of(patient));
  }
}
