import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; 
import { CovidService } from '../_services/covid.service';
import { CountryData, SummaryData } from './model';

@Component({
  selector: 'app-covid-updates',
  templateUrl: './covid-updates.component.html',
  styleUrls: ['./covid-updates.component.css'],
  providers: [DatePipe]
})
export class CovidUpdatesComponent implements OnInit {

  title = 'covid19-tracker';  
  summaryData: SummaryData;  
  indiaData: CountryData;  
  selectedCountryData: CountryData;  
  highlyConfirmedData: Array<CountryData>;  
  highlyDeathData: Array<CountryData>;  
  highlyRecoveredData: Array<CountryData>;  
  currentDate: string;  
 

  
  constructor(private service: CovidService, private datePipe: DatePipe) { }  
  
  ngOnInit() {  
    let date = new Date();  
    this.currentDate = this.datePipe.transform(date,'dd-MMM-yyyy');  
    this.getAllData();  
  }  
  
  getAllData() {  
    this.service.getData().subscribe(  
      response => {  
        this.summaryData = response;  
        this.getIndiaData();  
        this.getSortedData();
        this.getByCountry(); 
      }  
    )  
  }  
  
  getIndiaData() {  
    this.indiaData = this.summaryData.Countries.find(x => x.Slug == "india");  
  }  
  
  getSortedData() {  
    let data = JSON.parse(JSON.stringify(this.summaryData.Countries));  
    this.highlyConfirmedData = data.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed).slice(0, 10);  
    this.highlyDeathData = data.sort((a, b) => b.TotalDeaths - a.TotalDeaths).slice(0, 10);  
    this.highlyRecoveredData = data.sort((a, b) => b.TotalRecovered - a.TotalRecovered).slice(0, 10);  
  } 
  getByCountry(){  
    this.selectedCountryData = this.summaryData.Countries.find(x => x.Slug == "united-states");   
      }  
      
}

