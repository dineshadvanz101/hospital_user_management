import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppConstant {
  public MONTH_ARRAY=[ "01",  "02",  "03",  "04",  "05",  "06",  "07",  "08",  "09",  "10",  "11",  "12"];
  public pageLimit=10;
}
