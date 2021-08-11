import { Component, OnInit } from '@angular/core';


let rss_url: string = 'https://www.usda.gov/rss/home.xml';
 



@Component({
  selector: 'app-reader-test',
  templateUrl: './reader-test.component.html',
  styleUrls: ['./reader-test.component.css']
})
export class ReaderTestComponent implements OnInit {

   CORS_PROXY = "https://corsanywhere.herokuapp.com/"
  

   title:string[]=[];
   description:string[]=[];
   link:string[]=[];
   content="";
  constructor() { }

  ngOnInit(): void {
    fetch(this.CORS_PROXY+rss_url
      ).then(res => res.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        console.log(data)
        console.log(data.documentElement.getElementsByTagName("title").length)

        for (let i = 0; i < data.documentElement.getElementsByTagName("title").length; i++) {
           
        this.title[i]=data.documentElement.getElementsByTagName("title")[i].innerHTML;
        this.description[i]=data.documentElement.getElementsByTagName("description")[i].innerHTML;
        this.link[i]=data.documentElement.getElementsByTagName("link")[i].innerHTML;;
        }
       
        console.log(this.title)
        console.log(this.description)
        console.log(this.link)

      
      })
      
  }


}



