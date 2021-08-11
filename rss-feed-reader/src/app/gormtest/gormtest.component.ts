import { Inject } from '@angular/core';
import { Component, OnInit, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

// const RssParser = require('rss-parser'); //apparently "import" is a little bitch
// import Parser from 'rss-parser'; //allowSyntheticDefaultImports
import * as RssParser from 'rss-parser';

// import Parser from 'rss-parser';
//https://www.typescriptlang.org/tsconfig#esModuleInterop
//"esModuleInterop": true, did not work...


//copied part1
// let Parser = require('rss-parser');
// let parser = new Parser();
//copied part 2 
// (async () => {

//   let feed = await parser.parseURL('https://www.reddit.com/.rss');
//   console.log(feed.title);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });

// })();
//figure out where that goes in an angular project...

//example to play with
//https://feeds.npr.org/344098539/podcast.xml

@Component({
  selector: 'app-gormtest',
  templateUrl: './gormtest.component.html',
  styleUrls: ['./gormtest.component.css']
})
export class GormtestComponent implements OnInit {

  constructor(
    private http: HttpClient,
    // @Inject(RssParser) private parser: RssParser
  ) { }

  ngOnInit(): void {
    // this.parser.parseURL('https://www.reddit.com/.rss')
  }

  onBtn() {
    console.log("test");
    /*
        let Parser = require('rss-parser');
        let parser = new Parser();
    
        (async () => {
    
          let feed = await parser.parseURL('https://www.reddit.com/.rss');
          console.log(feed.title);
    
          // feed.items.forEach(item => {
          //   console.log(item.title + ':' + item.link)
          // });
    
        })();
        */
  }
  onBtn2() {
    console.log("test");
    this.http.get('https://www.reddit.com/.rss', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*', //'*' didnt work
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Methods': 'GET',
        //cors header, cors value?
      })
      //   .set('Content-Type', 'text/xml')
      //   .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      //   .append('Access-Control-Allow-Origin', '*')
      //   .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
      // , responseType: 'text'
    }
    )
      .subscribe(res => console.log(res));

  }







  /*
  {
          headers: new HttpHeaders()
          .set('Content-Type', 'text/xml') 
          .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
    , responseType:'text'}
    */






}
//https://www.npmjs.com/package/rss-parser

/*
I just managed to get rss-parser to import. Had to import some of its dependencies.
Right now my code consists of ```import * as RssParser from 'rss-parser';```
...
jeez, looks like we're going to need to learn pollyfills.
...
in order to get a httpclient method to work, I need to figure out cors issue... via headers?
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
...
might need a XMLHttpRequest() //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

*/