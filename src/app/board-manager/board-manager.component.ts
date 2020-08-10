import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../_services/manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.css']
})
export class BoardManagerComponent implements OnInit {

  
  form: any = {};
  isInserted = false;
  isNotInserted = false;
  errorMessage = '';
//  content: string;
empId: number;
empName: string;
empEmail: string;
empContact: string;
empType: string;
center_id: number;


  constructor(private managerService: ManagerService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.route.url)
    
    this.managerService.register(this.form).subscribe(
      _data => {
        console.log("hello");
      //  this.center_id = this.form.center_id;
      //  this.center_location = this.form.center_location;
         

         this.isNotInserted = false;
        this.isInserted = true;
        // this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
      },
      err => {
        console.log("hello");
        this.errorMessage = err.error.message;
        this.isNotInserted = true;
      }
    );
  }
}
