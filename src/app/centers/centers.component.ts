import { Component, OnInit } from '@angular/core';
import { Centers } from '../list/centers';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {

  centers: Centers[];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllCenters().subscribe(
      (      data: Centers[]) => {
        this.centers= data;
      },
      (      err: { error: string; }) => {
        this.centers = JSON.parse(err.error).message;
      }
    );
  }
}




