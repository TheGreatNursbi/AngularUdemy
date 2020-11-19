import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isClicked: boolean = false;
  isToggled: boolean = false;
  isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onStarClick(): void {
    this.isClicked = !this.isClicked;
  }

  onClickToggle(): void {
    this.isToggled = !this.isToggled;
  }

  onClickSelect(): void {
    this.isSelected = !this.isSelected;
  }
}
