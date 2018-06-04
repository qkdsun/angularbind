import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

	constructor() { }
	  
	searchInput:FormControl = new FormControl();

 	ngOnInit() {

  	}
	doOnInput(event){
		console.log(event.target.value)
	}
	myINPUT(event){
		console.log(event.value)
	}
}
