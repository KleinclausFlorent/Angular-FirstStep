import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";
import {Subscription} from "rxjs";
import {Appareil} from "../models/Appareil.model";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: Appareil[] = [];
  appareilSubscription : Subscription | undefined;


  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareilService.getAppareilsFromServer();
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils : Appareil[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')){
      this.appareilService.switchOffAll();
    }
    return null;
  }

  onSave(){
    this.appareilService.saveAppareilsToServer();
  }


  ngOnDestroy() {
    this.appareilSubscription?.unsubscribe();
  }



}
