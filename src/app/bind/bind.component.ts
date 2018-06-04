import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-bind",
	templateUrl: "./bind.component.html",
	styleUrls: ["./bind.component.css"]
})
export class BindComponent implements OnInit {
	constructor() {}
	
	public asd:boolean = true // dom属性
	public imgUrl:string = "http://placehold.it/200x100"
	
	// 双向数据绑定
	inputData:string = "456";

  	ngOnInit() {
		
	}
	changeAsd(){
		this.asd = !this.asd
	}
	doOnInput(event:any){
		console.log(event.target.value) // dom 属性
		console.log(event.target.getAttribute("value")) // html属性
	}
}
