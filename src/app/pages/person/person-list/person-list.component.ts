import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { DataService } from 'src/app/services/shared/data.service';
import { User, UserDetail } from 'src/app/shared/interfaces/general.type';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit, OnDestroy {

  userList : User[] = [];
  userData! : UserDetail;
  modalSwitch : boolean = false;
  userChoose : string = '0';
  userId! : number;

  constructor(private _dataService : DataService, ) { }
  OnDestroy$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    this.getAllUser();
    this._dataService.$modal.subscribe((value) =>{
      this.modalSwitch = value;
    })
  }

  ngOnDestroy(): void {
    this.OnDestroy$.next(true);
  }

  getAllUser() : void{
    this._dataService.getAllUser()
        .pipe(map(respuesta => {
          return respuesta['_embedded']['Acceso']
        }))
        .subscribe((respuesta:User[]) => {
          console.log(respuesta);
          console.log(respuesta);
          this.userList = respuesta;

        });
  }

  getDetailUser(userId : number) : void{

    this._dataService.getDetailUser((userId + 1).toString())
      .subscribe((respuesta : any) => {        
        this.userData = respuesta;
        console.log(this.userData);
    });
  }

  openModal(idUser : number){
    this.userId = idUser;
    this.getDetailUser(idUser);
    this.modalSwitch = true;
    this.userChoose = idUser.toString();
  }

}
