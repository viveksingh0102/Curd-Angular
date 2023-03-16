import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../crudService/service.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  editProducts = new FormGroup({
    pname: new FormControl(''),
    job: new FormControl(''),
   
})
  constructor(private service:ServiceService, private router:ActivatedRoute){}
  ngOnInit():void{
    this.service.getProductById(this.router.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res);
      this.editProducts = new FormGroup({
        pname: new FormControl(res['pname']),
        job: new FormControl(res['category']),
        

    })
     
    })
  }
  updateData(){
    console.log(this.editProducts.value);
    this.service.updateData(this.router.snapshot.params['id'], this.editProducts.value)
    .subscribe((res)=>{
      console.log("edit",res);
    }) 
    alert("Product Updated")
    this.editProducts.reset()
  }

}
