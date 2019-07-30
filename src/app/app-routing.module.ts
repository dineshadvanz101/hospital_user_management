import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BabyCnsComponent } from './dashboard/baby-cns/baby-cns.component';
import { GeneralComponent } from './dashboard/general/general.component';
import { MaternalComponent } from './dashboard/maternal/maternal.component';
import { BabyAppearComponent } from './dashboard/baby-appear/baby-appear.component';
import { BabyRespComponent } from './dashboard/baby-resp/baby-resp.component';
import { BabyCvComponent } from './dashboard/baby-cv/baby-cv.component';
import { BabyGitComponent } from './dashboard/baby-git/baby-git.component';
import { BabyInvestigationComponent } from './dashboard/baby-investigation/baby-investigation.component';
import { AntibioticAdministrationComponent } from './dashboard/antibiotic-administration/antibiotic-administration.component';
import { FinalComponent } from './dashboard/final/final.component';
import { HospitalAdminComponent } from './user-dashboards/hospital-admin/hospital-admin.component';
import { HospitalAdminInfoComponent } from './user-dashboards/hospital-admin/hospital-admin-info/hospital-admin-info.component';
import { HospitalBranchComponent } from './hospital-branch/hospital-branch.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  // {
  //   path: 'dashboard', component: DashboardComponent,
  //   children: [
  //     {path: '', redirectTo: 'baby-profile', pathMatch: 'prefix'},
  //     {path: 'baby-profile', component: GeneralComponent},
  //     {path: 'mother-profile', component: MaternalComponent},
  //     {path: 'baby-appearence', component: BabyAppearComponent},
  //     {path: 'baby-respiratory', component: BabyRespComponent},
  //     {path: 'baby-cardio-vascular', component: BabyCvComponent},
  //     {path: 'baby-cns', component: BabyCnsComponent},
  //     {path: 'baby-gi-tract', component: BabyGitComponent},
  //     {path: 'baby-investigation', component: BabyInvestigationComponent},
  //     {path: 'anitibiotic-administration', component: AntibioticAdministrationComponent},
  //     {path: 'final-diagnosis', component: FinalComponent},
  //   ]
  // }
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'baby-profile', pathMatch: 'prefix'},
      {path: 'baby-profile', component: GeneralComponent},
      {path: 'mother-profile', component: MaternalComponent},
      {path: 'baby-appearence', component: BabyAppearComponent},
      {path: 'baby-respiratory', component: BabyRespComponent},
      {path: 'baby-cardio-vascular', component: BabyCvComponent},
      {path: 'baby-cns', component: BabyCnsComponent},
      {path: 'baby-gi-tract', component: BabyGitComponent},
      {path: 'baby-investigation', component: BabyInvestigationComponent},
      {path: 'anitibiotic-administration', component: AntibioticAdministrationComponent},
      {path: 'final-diagnosis', component: FinalComponent},
    ],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin', component: HospitalAdminComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      {path: 'dashboard', component: HospitalAdminInfoComponent},
      {path:'addbranch',component:HospitalBranchComponent},
      {path:'setting',component:SettingsComponent}
    ],
  },
  {
    path: 'forget_password',
    loadChildren: './forget/forget.module#ForgetModule'
  },
  {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule'
  },
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true ,onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
