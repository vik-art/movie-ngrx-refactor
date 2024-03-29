import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public alert$ = new Subject<any>();
  constructor() {}
  success(text: string) {
    this.alert$.next({ type: 'success', text });
  }
  warning(text: string) {
    this.alert$.next({ type: 'warning', text });
  }
  danger(text: string) {
    this.alert$.next({ type: 'danger', text });
  }
}
