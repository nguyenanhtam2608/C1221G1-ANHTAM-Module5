import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public result: number = 0;
  public n1: number;
  public n2: number;

  constructor() {
  }

  ngOnInit() {
  }


  // display(value: string) {
  //
  //   const result = (document.getElementById('result') as HTMLInputElement).value;
  //
  //   (document.getElementById('result') as HTMLInputElement).value = result + value;
  //
  // }
  //
  // calculate() {
  //   const str = (document.getElementById('result') as HTMLInputElement).value;
  //   // tslint:disable-next-line:no-eval
  //   const result = eval(str);
  //   (document.getElementById('result') as HTMLInputElement).value = result;
  // }
  //
  // removeAll(value: any) {
  //   const str = (document.getElementById('result') as HTMLInputElement).value;
  //   // tslint:disable-next-line:no-eval
  //   const result = '';
  //   (document.getElementById('result') as HTMLInputElement).value = result;
  // }
  //
  // remove(value: any) {
  //   const str = (document.getElementById('result') as HTMLInputElement).value;
  //   // tslint:disable-next-line:no-eval
  //   // @ts-ignore
  //   const result = str.substring(0, str.length - 1);
  //   (document.getElementById('result') as HTMLInputElement).value = result;
  // }
  //
  // ts
  // display(value: string) {
  //  this.result += value;
  // }
  //
  // remove() {
  //   this.result = this.result.substring(0, this.result.length - 1);
  // }
  //
  // removeAll() {
  //   this.result = '';
  //   // tslint:disable-next-line:no-conditional-assignment
  //
  // }
  //
  // calculate(value: string) {
  //   // tslint:disable-next-line:no-eval
  //   const rs = this.result = eval(this.result);
  //   // tslint:disable-next-line:no-conditional-assignment use-isnan triple-equals
  //   if (rs == Infinity) {
  //     this.result = 'không chia được cho số 0';
  //
  //   }
  // }


  display(value: string) {
    switch (value) {
      case '+':
        // tslint:disable-next-line:no-unused-expression radix
        this.result = this.n1 + this.n2;
        break;
      case '-':
        // tslint:disable-next-line:no-unused-expression radix
        this.result = this.n1 - this.n2;
        break;
      case '*':
        // tslint:disable-next-line:no-unused-expression radix
        this.result = this.n1 * this.n2;
        break;
      case '/':
        // tslint:disable-next-line:no-unused-expression radix
        this.result = this.n1 / this.n2;
        break;
    }
  }
}





