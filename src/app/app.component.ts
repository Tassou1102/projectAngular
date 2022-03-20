import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ams project';
  formateur : string ='mohamed amine mezghich';
  bootcamp : string[]=["spring boot","angular","agil","devops"];
  estHybride : boolean=true;
  prix: number=450
}
