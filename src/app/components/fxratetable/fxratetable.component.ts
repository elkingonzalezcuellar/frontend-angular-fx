import { Component, OnInit } from '@angular/core';
import { FxrateService } from 'src/app/services/fxrate.service';
import { forex } from '../../models/forex.model';

@Component({
  selector: 'app-fxratetable',
  templateUrl: './fxratetable.component.html',
  styleUrls: ['./fxratetable.component.scss'],
})
export class FxratetableComponent implements OnInit {
  titles: string[] = ['#', 'Value', 'Time'];
  fxrates: forex[] = [];
  constructor(private fxrateService: FxrateService) {}

  ngOnInit(): void {
    this.update();
  }
  update() {
    this.fxrateService.getFxRates().subscribe((data) => {
      this.fxrates = data;
    });
  }
}
