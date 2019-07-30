import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { ReadingDataService } from 'src/app/shared/service/reading-data.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(private router:Router,public dataService:DataService,public readingDataService:ReadingDataService) { }
  selectedTab:string;
  ngOnInit() {
    this.selectedTab='dashboard';
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/"]);
    this.dataService.clearOption();
    this.readingDataService.isMotherProfileHaveResp = true;
    this.readingDataService.clearReadingFormData();
    this.readingDataService.reset();
    this.readingDataService.resetAll();
  }

  activeTab(tabName){
    this.selectedTab=tabName;
  }

}
