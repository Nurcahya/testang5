import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';   
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  nomor:string = "kosong";
  goals: any;
  
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(params => { 
     console.log(params);
      if (params['id']) { 
      	this.nomor=params['id'];
      } 
    });

  }


  ngOnInit() {
  	this._data.goal.subscribe(res => this.goals = res);
  }

 sendMeHome() {
    this.router.navigate(['']);
    return false;
  }
}
