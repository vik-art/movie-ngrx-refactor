import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000;
  public text!: string;
  public type: string = 'success';
  unSubscriber = new Subscription();

  constructor(private alertService: AlertService) {}
  ngOnInit(): void {
    this.unSubscriber.add(
      this.alertService.alert$.subscribe((alert) => {
        this.text = alert.text;
        this.type = alert.type;
        const timer = setTimeout(() => {
          clearTimeout(timer);
          this.text = '';
        }, this.delay);
      })
    );
  }
  ngOnDestroy(): void {
    this.unSubscriber.unsubscribe();
  }
}
