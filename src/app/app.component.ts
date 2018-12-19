import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  constructor(
    private service:DataService
  ){}

  ngOnInit(){
    this.jasonData();
  }
  printing:any[];
  jasonData(){
    this.service.getProductList().subscribe(res =>{
      this.printing=res;
    })
  }
}
