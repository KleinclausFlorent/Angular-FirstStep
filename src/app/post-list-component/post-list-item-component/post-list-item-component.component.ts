import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle : string = "";
  @Input() postContent : string = "";
  @Input() postLikes : number = 0;
  @Input() postCreationDate : Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }


  getColor(){
    if (this.postLikes > 0){
      return 'green';
    } else if (this.postLikes < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  onLike(){
    this.postLikes++;
  }
  onDislike(){
    this.postLikes--;
  }

}
