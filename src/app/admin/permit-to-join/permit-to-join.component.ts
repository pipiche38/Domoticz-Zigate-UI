import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/core';
import { ApiService } from '@app/services/api.service';
import { NotifyService } from '@app/services/notify.service';
import { TranslateService } from '@ngx-translate/core';

const log = new Logger('PermitToJoinComponent');

@Component({
  selector: 'app-permit-to-join',
  templateUrl: './permit-to-join.component.html',
  styleUrls: ['./permit-to-join.component.scss']
})
export class PermitToJoinComponent implements OnInit {
  permitToJoin: any;

  constructor(
    private notifyService: NotifyService,
    private apiService: ApiService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.apiService.getPermitToJoin().subscribe(result => {
      this.permitToJoin = result;
    });
  }

  updatePermitToJoin(value: number) {
    this.permitToJoin.PermitToJoin = value;
    this.apiService.putPermitToJoin(this.permitToJoin).subscribe((result: any) => {
      this.notifyService.notify();
    });
  }
}
