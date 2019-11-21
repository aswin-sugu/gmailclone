import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {


  inbox$:object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getEmail().subscribe(
      data=>this.inbox$=data
    )
  }

}
