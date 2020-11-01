import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Numero del resultado que aparecera en pantalla
  display: string = '0';

  firstNumber:string = '';
  lastNumber:string = '';
  partialResult:number;

  //Operation on course
  operationOnCourse: string = '';

  constructor() {

  }

  addNumber(number){

    //If display shows zero
    if(this.display == '0'){
      //show the number pushed
      if(number != '.'){
        this.display = number.toString();
      }else{
        this.display += '.';
      }
    }
    //If display doesn't shows zero
    else{
      //Add the number pushed
      this.display += number.toString();
    }

  }


  deleteNumber(){

    //If $display is diferent than zero
    if(this.display != '0'){
      if(this.display.length == 1){
        //If $display.lenght is 1 remplace for zero
        this.display = '0';
      }else{
        //Delete the last number
      this.display = this.display.substring(0, this.display.length - 1);
      }
    }
    
  }

  clear(){

  }

  calc(doOperation){

    if(this.operationOnCourse != ''){
        
      switch(this.operationOnCourse){
        case 'add':
          this.partialResult = parseFloat(this.firstNumber) + parseFloat(this.display);
          this.operationOnCourse = '';
          this.display = this.partialResult.toString();
          break;
        
        case 'less':
          this.partialResult = parseFloat(this.firstNumber) - parseFloat(this.display);
          this.operationOnCourse = '';
          this.display = this.partialResult.toString();
          break;

        case 'multiply':
            this.partialResult = parseFloat(this.firstNumber) * parseFloat(this.display);
            this.operationOnCourse = '';
            this.display = this.partialResult.toString();
            break;
          
        case 'divide':
          this.partialResult = parseFloat(this.firstNumber) / parseFloat(this.display);
          this.operationOnCourse = '';
          this.display = this.partialResult.toString();
          break;

      }

    }else{
      this.firstNumber = this.display;
      this.display = '0';
      this.operationOnCourse = doOperation;
    }


  }

  calcOneSteep(doOperation){
    switch(doOperation){
      case 'square':
        this.partialResult = parseFloat(this.display) * parseFloat(this.display);
        this.display = this.partialResult.toString();
        break;
      case 'squareRoot':
        this.partialResult = Math.sqrt(parseFloat(this.display));
        this.display = this.partialResult.toString();
        break;
    }
  }


}
