import { Component, OnChanges, OnInit } from '@angular/core';
import { Article } from '../Article';
import { RssService } from '../rss.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges{

  constructor(private rssService: RssService) { }
  articles: Article[] = [];
  ngOnInit(): void {
    this.rssService.articleEmitter.subscribe(
      result =>{
        this.articles = result;
        //need to actually get something from this ...
        //...or need to make emitter get called...
        console.log('new articles: ' + result)
        //this is getting info but not changing html
        //...because I forgot to write html for it
      }
    )
  }

  onRss(){
    // this.rssService.articleEmitter.next()
    //get data, set articles 
  }
  ngOnChanges(){
    this.rssService.articleEmitter.subscribe(
      result =>{
        this.articles = result;
        //need to actually get something from this ...
        //...or need to make emitter get called...
        console.log('new articles: ' + result)
        //this is getting info but not changing html
      }
    )

  }

}
