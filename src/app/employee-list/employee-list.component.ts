import { Component } from '@angular/core';
import { ServiceService } from '../crudService/service.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  product: any;
  constructor(private service:ServiceService){}
  dtOptions:DataTables.Settings = {};
  ngOnInit(): void{
    this.dtOptions = {
      pagingType:'full_numbers',
      pageLength:5,
      lengthMenu:[3,5,6,9],
      processing:true
    }
    this.service.getData().subscribe((res=>{
      this.product=res
      console.log("Product",this.product);
      
    }))
  }
  deleteData(id:any){
    this.service.deleteProduct(id).subscribe((res=>{
      this.ngOnInit()
    }))
  }
}
