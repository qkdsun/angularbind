import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx'
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

	constructor() {
		this.searchInput.valueChanges
		.debounceTime(500)
		.subscribe(
			value => this.printInput(value)
		)
	}
	  
	searchInput:FormControl = new FormControl();

 	ngOnInit() {
		
	}
	  
	doOnInput(event){
		console.log(event.target.value)
	}
	myINPUT(event){
		console.log(event.value)
	}
	printInput(value){
		console.log(value)
	}
}
