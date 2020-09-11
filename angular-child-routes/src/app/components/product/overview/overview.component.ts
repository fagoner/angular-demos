import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {

  overSub: Subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.overSub = this.route.parent.paramMap.subscribe(
      params=>{
        console.log('Overview is getting values from parent: ', params.get('id'))
      }
    )

  }
}
