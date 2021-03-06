import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = "";
  @Input() appareilStatus: string = "";
  @Input() appareilIndex: number = -1;
  @Input() id: number | undefined;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus === 'allumé'){
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    } else {
      return 'pink';
    }
  }

  onSwitch(){
    if(this.appareilStatus === 'allumé'){
      this.appareilService.switchOffOne(this.appareilIndex);
    } else if(this.appareilStatus === 'éteint'){
      this.appareilService.switchOnOne(this.appareilIndex);
    }
  }

}
