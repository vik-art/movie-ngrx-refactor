import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  searchQuery!: string;
  page: number = 1;
  openPage: boolean = false;
  favouriteBtnText = 'Add to favourite';
  selectedBtnText = 'Mark as selected';
  resultsNotification: boolean = false;
  movies: any;

  public load: boolean = false;

  unSubscriber = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieSerVice: MovieService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.unSubscriber.unsubscribe();
  }

  initForm() {
    this.form = new FormGroup({
      query: new FormControl('', Validators.required),
    });
    this.form.valueChanges.subscribe(() => {
      if (this.searchQuery !== this.form.value.query) {
        this.page = 1;
      }
      this.searchQuery = this.form.value.query;
    });
  }
  submit() {
    const queryParams = {
      searchQuery: this.searchQuery,
      page: this.page,
    };
    this.movieSerVice.getMovie(queryParams).subscribe(res => this.movies = res.results)
  }

  loadMoreMovies() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'];
    });
    const queryParams = {
      searchQuery: this.searchQuery,
      page: this.page,
    };
  }

  openMoviePage(event: number) {
  }

  onClose() {
    this.openPage = false;
    this.router.navigate(['/'], {
      queryParams: { query: this.searchQuery },
    });
  }

  showLoading() {
    this.load = true;

    setTimeout(() => {
      this.load = false;
    }, 3000);
  }

  onScroll(el: string) {
    document
      .querySelector(el)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}