import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from "./shared/service/common/common.service";

import { HttpClientModule } from "@angular/common/http";
import { Common } from "./shared/service/common/common";
import { AppConstant } from "./shared/constant/app-constant";
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from "ngx-perfect-scrollbar";

import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
// import { DashboardRouting } from "./dashboard.routing";
import { MatTabsModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { BasicComponent } from "./dashboard/basic/basic.component";
import { GeneralComponent } from "./dashboard/general/general.component";


 import { SearchComponent } from "./dashboard/search/search.component";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { LevelComponent } from "./dashboard/level/level.component";
import { MaternalComponent } from "./dashboard/maternal/maternal.component";
import { BabyAppearComponent } from "./dashboard/baby-appear/baby-appear.component";
import { BabyRespComponent } from "./dashboard/baby-resp/baby-resp.component";
import { BabyCvComponent } from "./dashboard/baby-cv/baby-cv.component";
import { BabyCnsComponent } from "./dashboard/baby-cns/baby-cns.component";
import { BabyGitComponent } from "./dashboard/baby-git/baby-git.component";
import { BabyInvestigationComponent } from "./dashboard/baby-investigation/baby-investigation.component";
import { FinalComponent } from "./dashboard/final/final.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { UserInfoComponent } from "../app/dashboard/user-info/user-info.component";
import { DateLevelPipe } from "./shared/pipes/date-level.pipe";
import { FormsModule } from "@angular/forms";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { AntibioticAdministrationComponent } from "./dashboard/antibiotic-administration/antibiotic-administration.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {NgxMaskModule} from 'ngx-mask'
import { DataService } from './shared/service/data.service';
import { TopNavBarComponent } from './shared/core/components/top-nav-bar/top-nav-bar.component';
import { HospitalAdminComponent } from './user-dashboards/hospital-admin/hospital-admin.component';
import { HospitalStaffComponent } from './user-dashboards/hospital-staff/hospital-staff.component';
import { ReferralDoctorComponent } from './user-dashboards/referral-doctor/referral-doctor.component';
import { FooterComponent } from './shared/core/components/footer/footer.component';
import { HospitalAdminInfoComponent } from './user-dashboards/hospital-admin/hospital-admin-info/hospital-admin-info.component';
import { HospitalBranchComponent } from './hospital-branch/hospital-branch.component';
import { AppHelper } from './shared/helper/app.helper';
import { SettingsComponent } from './settings/settings.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};
@NgModule({
  declarations: [AppComponent,
    DashboardComponent,
    BasicComponent,
    GeneralComponent,
    SearchComponent,
    LevelComponent,
    MaternalComponent,
    BabyAppearComponent,
    BabyRespComponent,
    BabyCvComponent,
    BabyCnsComponent,
    BabyGitComponent,
    BabyInvestigationComponent,
    FinalComponent,   
   UserInfoComponent,
    DateLevelPipe,
    AntibioticAdministrationComponent,
    TopNavBarComponent,
    HospitalAdminComponent,
    HospitalStaffComponent,
    ReferralDoctorComponent,
    FooterComponent,
    HospitalAdminInfoComponent,
    HospitalBranchComponent,
    SettingsComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModalModule,
    ScrollingModule,
    NgbDatepickerModule,
    InfiniteScrollModule,
    ScrollDispatchModule,
    NgxSpinnerModule,
    AngularMultiSelectModule,
    BsDatepickerModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [
    CommonService,
    Common,
    CookieService,
    DataService,
    AppHelper,
    AppConstant,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
