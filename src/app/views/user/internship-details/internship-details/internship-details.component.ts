import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.scss']
})
export class InternshipDetailsComponent implements OnInit {
  internship: any;

  id=''
  constructor(private route: ActivatedRoute, private ds: DataService) {
    this.route.params.subscribe(params =>this.id=params['id'])
    this.ds.getInternshipById(this.id).subscribe(response=>console.log(response))
  }

  ngOnInit(): void {
    
  }

}
