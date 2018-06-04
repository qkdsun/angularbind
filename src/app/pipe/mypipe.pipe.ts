import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

	transform(value: any, args: any ,arsd: any): any {
		// value 为传入职 后面为传的参数（args、arsd）
		console.log(value, args, arsd)
		return value * args * arsd;
	}

}
