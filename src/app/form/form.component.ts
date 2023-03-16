import { Component } from '@angular/core';
import { ServiceService } from '../crudService/service.service';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 constructor(private service:ServiceService){}
 ngOnInit():void {}
 saveData(){
  this.service.addProduct(this.productDetails.value).subscribe((res=>{
    alert("Product Created ! ")
    this.productDetails.reset()
  }))
 }
 productDetails = new FormGroup({
      pname: new FormControl(''),
      job: new FormControl(''),
 })
}
