import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts = [
    {
      title: 'Premier Post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      loveIts: 12,
      creatDate: new Date(2019,1,2,12,34,56),
    },
    {
      title: 'Deuxième Post',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      loveIts: -12,
      creatDate: new Date(2020,12,24,20,12,54),
    },
    {
      title: 'Dernier Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus est nec libero pellentesque dictum. Ut non magna a nisl consequat tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fringilla tortor libero, a suscipit nisl pellentesque vel. Donec eu magna et sapien imperdiet rutrum. Cras sed fermentum magna, aliquet blandit massa. Morbi pretium interdum mollis. Cras nec volutpat dolor. Cras dignissim quis est ultrices lobortis. Pellentesque in pretium nisi, in commodo lorem. Mauris pellentesque est quis euismod hendrerit. Aliquam eu ipsum at felis dapibus ullamcorper. Ut varius nunc a massa aliquet pretium faucibus at arcu. Praesent risus diam, pulvinar et dolor egestas, hendrerit volutpat orci. Fusce ligula lorem, molestie id sem eget, aliquet mattis ipsum. Aliquam consequat varius blandit.',
      loveIts: 0,
      creatDate: new Date(2021,3,6,14,11,0),
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
