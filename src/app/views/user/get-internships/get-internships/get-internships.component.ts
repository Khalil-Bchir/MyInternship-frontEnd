import { Component , OnInit} from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-get-internships',
  templateUrl: './get-internships.component.html',
  styleUrls: ['./get-internships.component.scss']
})
export class GetInternshipsComponent implements OnInit {

  dataArray:any
  constructor(private ds:DataService){
  
    this.ds.getInternships().subscribe(data=>this.dataArray=data)
  
  }; 
  

  ngOnInit(): void {

  }

}
