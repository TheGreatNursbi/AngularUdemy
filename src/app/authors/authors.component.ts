import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: string[];
  constructor(private _authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authors = this._authorsService.getAuthors();
  }

}
