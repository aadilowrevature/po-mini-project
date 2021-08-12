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

  submit(){ //add string parameter
    // event?.preventDefault();
    console.log("submit");
    //this should call the rss service... and cause displaying of results
    this.rssService.setData('https://www.usda.gov/rss/home.xml');
    //should this call next() in the subject?
    
  }
}
