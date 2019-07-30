import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Subject } from 'rxjs';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class CommonService {
  status = false;
  baseUrl = environment.server_url;
  private subject = new Subject<any>(); 
  private subject_for_medical_number = new Subject<any>(); 

  constructor(private http: HttpClient) {}

  sendBirthDate(message: string) {  
    this.subject.next({ text: message });  
  }  
  
  getBirthDate(): Observable<any> {  
    return this.subject.asObservable();  
  }

  setMedicalRecordNumber(message: string) {  
    this.subject_for_medical_number.next({ text: message });  
  }  
  
  getMedicalRecordNumber(): Observable<any> {  
    return this.subject_for_medical_number.asObservable();  
  }

  /**
   *
   * @param data
   * @method:- signup
   * @purpose :-  This is method required for the Create new user.
   */
  patient_signup(data) {
    return this.http.post(this.baseUrl + "patient/signup", data, this.jwt());
  }

  /**
   *
   * @param data
   * @method:- get_patients
   * @purpose :- this is required for get get patient info details.
   */
  get_patients(obj = { hospital_name: "test" }) {
    return this.http.post(
      this.baseUrl + "patient/get_patients",
      obj,
      this.jwt()
    );
  }

  /**
   *
   * @param data
   * @method:- get_level
   * @purpose :- get the level of patent info
   */
  get_level(patient_id) {
    return this.http.post(
      this.baseUrl + "patient/get_level/" + patient_id,
      [],
      this.jwt()
    );
  }
  /**
   *
   * @param data
   * @method:- get_level
   * @purpose :- get the level of patent info
   */
  // get_tabs(method_url, study_id, hospital_id, page_no) {
  //   return this.http.post(
  //     this.baseUrl + method_url + "/" + study_id + "/" + hospital_id + "/" + page_no,
  //     [],
  //     this.jwt()
  //   );
  // }

  get_tabs_general(method_url, study_id, hospital_id, page_no) {
    return this.http.post(
      this.baseUrl + method_url + "/" + study_id + "/" + hospital_id + "/" + page_no,
      [],
      this.jwt()
    );
  }

  get_tabs_maternal(method_url, study_id, hospital_id, page_no) {
    return this.http.post(
      this.baseUrl + method_url + "/" + study_id + "/" + hospital_id + "/" + page_no,
      [],
      this.jwt()
    );
  }

  get_tabs(method_url, study_id, hospital_id, page_no, reading) {
    return this.http.get(
      this.baseUrl + method_url + "/" + study_id + "/" + hospital_id + "/" + page_no + "/" + reading,
      this.jwt()
    );
  }

  

  /**
   *
   * @param data
   * @method:- get_level
   * @purpose :- get the level of patent info
   */
  get_order_record(method_url, obj) {
    return this.http.post(this.baseUrl + method_url + "/", obj, this.jwt());
  }

  /**
   *
   * @param data
   * @method:- patient_basic_info_updated
   * @purpose :-  This is method required for the Create new user.
   */
  patient_basic_info_updated(data) {
    return this.http.post(this.baseUrl + "patient/basic/add", data, this.jwt());
  }


  /**
   *
   * @param data
   * @method:- patient_basic_info_dup_updated
   * @purpose :-  This is method required for the Create new user with different study id.
   */
  patient_basic_info_dup_updated(data,hospital_id) {
    return this.http.post(this.baseUrl + "patient/basic/add_dup/"+hospital_id+"", data, this.jwt());
  }


  /**
   *
   * @param data
   * @method:- patient_basic_info_updated
   * @purpose :-  This is method required for the Create new user.
   */
  patient_general_info_updated(data) {
    return this.http.post(
      this.baseUrl + "patient/general/add",
      data,
      this.jwt()
    );
  }

  /**
   *
   * @param data
   * @method:- patient_basic_info_updated
   * @purpose :-  This is method required for the Create new user.
   */
  // babyApears(data) {
  //   return this.http.post(
  //     this.baseUrl + "patient/baby_appears/add",
  //     data,
  //     this.jwt()
  //   );
  // }

  addMethod(data, method_name = "") {
    return this.http.post(
      this.baseUrl + "patient/" + method_name + "/add",
      data,
      this.jwt()
    );
  }

  /**
   *
   * @param data
   * @method:- patient_basic_info_updated
   * @purpose :-  This is method required for the Create new user.
   */
  maternal_add(data) {
    return this.http.post(
      this.baseUrl + "patient/maternal/add",
      data,
      this.jwt()
    );
  }

    /**
   *
   * @param data
   * @method:- patient_basic_info_updated
   * @purpose :-  This is method required for the Create new user.
   */
  baby_git_add(data) {
    return this.http.post(
      this.baseUrl + "patient/baby_git/add",
      data,
      this.jwt()
    );
  }

      /**
   *
   * @param data
   * @method:- patient_basic_info_updated
   * @purpose :-  This is method required for the Create new user.
   */
  baby_appear_add(data) {
    return this.http.post(
      this.baseUrl + "patient/baby_appears/add",
      data,
      this.jwt()
    );
  }

    /**
   *
   * @param data
   * @method:- baby_resp add
   * @purpose :-  This is method required for the Create new user.
   */
  baby_resp_add(data) {
    return this.http.post(
      this.baseUrl + "patient/baby_resp/add",
      data,
      this.jwt()
    );
  }

    /**
   *
   * @param data
   * @method:- baby_cns_add
   * @purpose :-  This is method required for the Create new user.
   */
  baby_cns_add(data) {
    return this.http.post(
      this.baseUrl + "patient/baby_cns/add",
      data,
      this.jwt()
    );
  }

      /**
   *
   * @param data
   * @method:- baby_cns_add
   * @purpose :-  This is method required for the Create new user.
   */
  baby_cv_add(data) {
    return this.http.post(
      this.baseUrl + "patient/baby_cv/add",
      data,
      this.jwt()
    );
  }

        /**
   *
   * @param data
   * @method:- baby_cns_add
   * @purpose :-  This is method required for the Create new user.
   */
  antibiotic_add(data) {
    return this.http.post(
      this.baseUrl + "patient/baby_antibiotic/add",
      data,
      this.jwt()
    );
  }

         /**
   *
   * @param data
   * @method:- baby_cns_add
   * @purpose :-  This is method required for the Create new user.
   */
  baby_investigation_add(data) {
    return this.http.post(
      this.baseUrl + "patient/baby_investigation/add",
      data,
      this.jwt()
    );
  }

          /**
   *
   * @param data
   * @method:- baby_cns_add
   * @purpose :-  This is method required for the Create new user.
   */
  final_add(data) {
    return this.http.post(
      this.baseUrl + "patient/baby_final/add",
      data,
      this.jwt()
    );
  }

  
  search_patient(obj: any) {
    return this.http.post(this.baseUrl + "patient/like", obj, this.jwt());
  }

  /**
   * @method :-jwt
   * @purpose :- Json Web Token . it is used auth token and set header.
   */
  jwt(token = null) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return httpOptions;
  }

  create_new_reading(data) {
    return this.http.post(
      this.baseUrl + 'patient/models/save',
      data
    );
  }

  get_new_reading(study_id){
    return this.http.get(
      this.baseUrl + 'patient/readingId/'+study_id,
      this.jwt()
    );
  }

  search_patient_reading(str, hospital_id){
    return this.http.get(this.baseUrl + "patient/search/" + str +'/'+ hospital_id, this.jwt());
  }

  // updateFormData(url,study_id,reading,data){
  //   return this.http.put(this.baseUrl+ "patient/update/baby_cv/" +study_id+'/'+reading,data,this.jwt());
  // }

  updateFormData(url,study_id,reading,data){
    return this.http.put(this.baseUrl+url+study_id+'/'+reading,data,this.jwt());
  }

  getLastReadingData(study_id){
    return this.http.get(this.baseUrl + "patient/models/" + study_id , this.jwt());
  }

  updateBabyProfile(study_id,data){
    return this.http.put(this.baseUrl + "patient/update/babyProfile/" + study_id ,data ,this.jwt())
  }

  updateMaternalProfile(study_id,data){
    return this.http.put(this.baseUrl + "patient/update/motherProfile/" + study_id ,data, this.jwt())
  }

  addBranch(data){
    return this.http.post(
      this.baseUrl + 'patient/models/save',
      data
    );
  }

  getHospitalBranches(hospitalId){
    return this.http.get(this.baseUrl + "patient/models/" + hospitalId , this.jwt());
  }

  
}
