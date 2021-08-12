import { Component, OnInit } from '@angular/core';
import { RssService } from '../rss.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  urlList: string[] = [];
  constructor(private rssService: RssService) { }

  ngOnInit(): void {
    // this.this.rssService.getUrls();
    this.rssService.urlEmitter
    .subscribe(res=>{
      console.log("save compoenent")
      this.urlList = res;
    })
  }

}
