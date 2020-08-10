import { Component, OnInit } from '@angular/core';
import { PatientService } from '../_services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
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


  constructor(private patientService: PatientService, private route:ActivatedRoute) { }

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

  // onSubmit1(): void {
  //   this.patientService.deleteCenter(this.form).subscribe(
  //     _data => {

  //        this.isNotDeleted = false;
  //       this.isDeleted = true;
  //     },
  //     err => {
  //       console.log("hello");
  //       this.errorMessage = err.error.message;
  //       this.isNotDeleted = true;
  //     }
  //   );
  // }

  // gotoList() {
  //   this.router.navigate(['/centers']);
  // }

}