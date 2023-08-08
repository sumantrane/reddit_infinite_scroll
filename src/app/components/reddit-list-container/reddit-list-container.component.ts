import { Component, OnInit, HostListener } from '@angular/core';
import { RedditApiService } from '../../services/reddit-api.service';

@Component({
  selector: 'app-reddit-list-container',
  templateUrl: './reddit-list-container.component.html',
  styleUrls: ['./reddit-list-container.component.css'],
})
export class RedditListContainerComponent implements OnInit {
  posts: any[] = [];
  after: string | undefined;

  constructor(private redditApiService: RedditApiService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.redditApiService.getPosts(this.after).subscribe((data) => {
      const newPosts = data.data.children.map((child: any) => child.data);
      console.log('data:', newPosts);
      this.posts.push(...newPosts);
      this.after = data.data.after;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      this.loadPosts();
    }
  }
}
