import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/service.index';
import { UserDetail } from 'src/app/shared/interfaces/general.type';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  //@Input() userData!: UserDetail;
  @Input() userId!: number;
  existData : boolean = false;
  userData! : UserDetail;
  

  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
    console.log('inicio modal');
    /* console.log(this.userData)
    if(this.userData != undefined){
      this.existData = true;
    } */

    this.getDetailUser(this.userId);
  }

  getDetailUser(userId : number) : void{

    this._dataService.getDetailUser((userId + 1).toString())
      .subscribe((respuesta : any) => {        
        this.userData = respuesta;
       
    });
  }

  closeModal(){
    this._dataService.$modal.emit(false);
  }

}
