import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../_services/patient.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  form: any = {};
  isInserted = false;
  isNotInserted = false;
  isDeleted = false;
  isNotDeleted= false;
  errorMessage = '';
//  content: string;
email: string;
firstname: string;
lasstname: string;
password: string;


  constructor(private patientService: PatientService , private route:ActivatedRoute) { }

  ngOnInit(): void {

    
  }

  onSubmit(): void {
    console.log(this.route.url)
    
    this.patientService.register(this.form).subscribe(
      _data => {
        
         this.isNotInserted = false;
        this.isInserted = true;
      },
      err => {
        console.log("hello");
        this.errorMessage = err.error.message;
        this.isNotInserted = true;
      }
    );
  }

}
