import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Centers } from '../list/centers';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  form: any = {};
  isInserted = false;
  isNotInserted = false;
  isDeleted = false;
  isNotDeleted = false;
  errorMessage = '';
  //  content: string;
  center_id: number;
  center_location: string;

  centers: Centers[];


  constructor(private userService: UserService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }


onSubmit(): void {

  console.log(this.route.url)
  
  this.userService.register(this.form).subscribe(
    _data => {
      console.log(this.center_id);
      console.log(this.center_location);

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

onSubmit1(): void {
  console.log(this.form.center_id);
  this.userService.deleteCenter(this.form.center_id).subscribe(

    _data => {


      this.isNotDeleted = false;
      this.isDeleted = true;
    },
    err => {
      console.log("hello");
      this.errorMessage = err.error.message;
      this.isNotDeleted = true;
    }
  );
}

onSubmit2(): void {
  console.log(this.form.center_id);
  this.userService.findCenter(this.form.center_id).subscribe(

    _data => {
      this.isNotDeleted = false;
      this.isDeleted = true;
    },
    err => {
      console.log("hello");
      this.errorMessage = err.error.message;
      this.isNotDeleted = true;
    }
  );
}



  // gotoList() {
  //   this.router.navigate(['/centers']);
  // }

}

