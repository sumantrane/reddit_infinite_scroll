import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reddit-list-item',
  templateUrl: './reddit-list-item.component.html',
  styleUrls: ['./reddit-list-item.component.css'],
})
export class RedditListItemComponent {
  @Input() post: any;

  constructor() {}
}
