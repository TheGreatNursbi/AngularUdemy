import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likes-count') likesCount: number;
  @Input('is-active') isActive: boolean;

  onClickLike(): void {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
