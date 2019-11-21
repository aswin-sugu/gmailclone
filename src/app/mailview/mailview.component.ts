import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-mailview',
  templateUrl: './mailview.component.html',
  styleUrls: ['./mailview.component.scss']
})
export class MailviewComponent implements OnInit {


   user$:object;
   inbox$:object;

  constructor(private data:DataService, private route:ActivatedRoute) {
    this.route.params.subscribe(params=>this.user$=params.id)
   }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data=>this.user$=data
    )

    
  }

}
