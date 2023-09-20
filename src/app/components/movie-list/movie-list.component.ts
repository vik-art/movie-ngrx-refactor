import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() movies!: any[];
  @Output() openMoviePage = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  openModal(id: number) {
    this.openMoviePage.emit(id);
  }
}
