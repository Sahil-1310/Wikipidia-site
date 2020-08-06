import { Component } from '@angular/core';
import { WikiseviceService } from './wikisevice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wikipidia';
pages=[];
constructor(private wikki:WikiseviceService){}

  onClick(data:any ){

    this.wikki.search(data).subscribe((response: any) => {
      this.pages = response.query.search;
    });
}
}
