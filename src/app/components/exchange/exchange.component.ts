import { Component, OnDestroy, OnInit } from '@angular/core';
import { exchange } from '../../models/exchange.model';
import { ExchangeService } from '../../services/exchange.service';
import { FxrateService } from '../../services/fxrate.service';
import { Observable, interval, Subscription, timer } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/enviroment';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent implements OnInit, OnDestroy {
  exchange: exchange = {
    rate: 0,
    symbol: '',
    timestamp: 0,
  };
  date = new Date();
  realTimeDataSubscription$: Subscription = new Subscription();
  constructor(
    private exchangeService: ExchangeService,
    private fxrateService: FxrateService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.realTimeData();
  }

  realTimeData() {
    this.realTimeDataSubscription$ = timer(0, 30000)
      .pipe(exhaustMap(() => this.exchangeService.getExchange()))
      .subscribe((res) => {
        this.exchange = res;
        console.log(res);
        this.date = new Date(res.timestamp * 1000);
        this.http
          .post(environment.apiUrlMicroservice, {
            fxRateValue: res.rate,
            fxRateDate: res.timestamp * 1000,
          })
          .subscribe((res) => {
            console.log('created', res);
          });
      });
  }
  ngOnDestroy() {
    this.realTimeDataSubscription$.unsubscribe();
  }
}
