import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Common } from '../shared/service/common/common';
import { CommonService } from '../shared/service/common/common.service';
import { AppHelper } from '../shared/helper/app.helper';
import { ToastrService } from 'ngx-toastr';
import { AppConstant } from '../shared/constant/app-constant';

@Component({
  selector: 'app-hospital-branch',
  templateUrl: './hospital-branch.component.html',
  styleUrls: ['./hospital-branch.component.css']
})
export class HospitalBranchComponent implements OnInit {
  addBranchForm: FormGroup;

  public customPatterns = {'A': { pattern: new RegExp('\[a-zA-Z0-9_*!@#$%&\]')}};

  hospitalList=[];
  page=1;
  hospitalId:number;
  pageLength:number;
  constructor(private formBuilder: FormBuilder,private commonService:CommonService,private helper:AppHelper,private toasty:ToastrService,private constant:AppConstant) { }

  ngOnInit() {
    const vim = this;
    vim.createForm();
    // vim.getHospitalBranches(this.hospitalId,this.page,this.constant.pageLimit);
  }

  createForm() {
    const vim = this;
    this.pageLength=this.constant.pageLimit;
    this.addBranchForm = this.formBuilder.group({
      name: [ "",
        [Validators.required, Validators.maxLength(15)]
      ],
      contact_person: ["", [Validators.minLength(3), Validators.maxLength(15)]],
      contact_number: ["", [Validators.required, Validators.maxLength(10)]],
      email: ["", [Validators.required, Validators.email]],
      address: "",
      city: ["", [Validators.maxLength(15)]],
      state: "",
      pin_code: ["", [Validators.minLength(6)]],
      user_name: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  onBranchSubmit() {
   if(!this.addBranchForm.valid){
    return;
   }
   this.addBranch(this.addBranchForm['value']);
  }

  addBranch(formValue){
    this.commonService.addBranch(formValue).subscribe(response=>{
      if(this.helper.success(response)){
          this.success(response,'addBranch')
          //  this.getHospitalBranches(this.hospitalId,this.page,this.pageLength);
      }
      else{
        this.helper.errorHandler(response);
      }
    })
  }

  getHospitalBranches(hospitalId,page,limit){
      this.commonService.getHospitalBranches(hospitalId).subscribe(response=>{
        if(this.helper.success(response)){
            this.hospitalList=response['response'];
        }
        else{
          this.helper.errorHandler(response);
          this.hospitalList=[];
        }
      })
  }

  onDropDownChange(page_length){
    // this.getHospitalBranches(this.hospitalId,this.page,this.pageLength)
  }

  success(response,api_type){
    if(api_type=='addBranch'){
      this.toasty.success(response['message'],'');
    }
  }

}
