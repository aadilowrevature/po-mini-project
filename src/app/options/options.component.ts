import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RssService } from '../rss.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  urlInput: string = ''; 

  constructor(private rssService: RssService) { }

  ngOnInit(): void {
  }

  submit(input: string) { 
    this.rssService.setData(input);
  }
  save(inp: string) {
    // console.log(inp); //worked
    if(inp.length>0){
      this.rssService.addUrl(inp);
    }
    else{
      //handle this!
    }
    this.urlInput = '';

  }
}
