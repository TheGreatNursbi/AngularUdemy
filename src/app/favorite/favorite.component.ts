import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite = false;
  @Output('change') click = new EventEmitter();

  onContrastIsFavorite(): void {
    this.isFavorite = !this.isFavorite;
    const eventArgs: FavoriteChangeEventArgs = {
      newValue: this.isFavorite
    };

    this.click.emit(eventArgs);
  }
}

export interface FavoriteChangeEventArgs {
  newValue: boolean;
}
