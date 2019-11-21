import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable  } from 'rxjs';
@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss']
})
export class OutboxComponent implements OnInit {

  outbox$:object;

  constructor(private data:DataService) { }

  ngOnInit() {

    return this.data.getOutbox().subscribe(
      data=> this.outbox$=data
    )
    
  }

}
