import { Component, OnInit } from '@angular/core';
import { RssService } from '../rss.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private rssService: RssService) { }

  ngOnInit(): void {
  }

  submit(input:string){ //add string parameter
    // event?.preventDefault();
    // console.log("submitted: "+ input);
    // console.log(input);
    this.rssService.setData(input);
    //this should call the rss service... and cause displaying of results
    // this.rssService.setData('https://www.usda.gov/rss/home.xml');
    //should this call next() in the subject?

  }
}
//https://feeds.npr.org/344098539/podcast.xml //this one does not work
//https://www.usda.gov/rss/home.xml //this oen works