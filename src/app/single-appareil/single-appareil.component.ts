import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../service/appareil.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id  = this.route.snapshot.params['id'];
    let appareil = this.appareilService.getAppareilById(+id);
    if (appareil === undefined){
      this.name = 'undefined';
      this.status = 'undefined'
    } else {
      this.name = appareil.name;
      this.status = appareil.status;
    }
    /*
    // @ts-ignore
    this.name = this.appareilService.getAppareilById(id).name;
    // @ts-ignore
    this.status = this.appareilService.getAppareilById(+id).status;
*/
  }

}
