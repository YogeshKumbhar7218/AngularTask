import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  templateUrl: './News.component.html',
  styleUrls: ['./News.component.css']
})
export class NewsComponent {
  articles: any = null;
  constructor(public http:HttpClient) {
    this.getData();
  }
  getData() {
    this.http.get("https://newsapi.org/v2/everything?q=tesla&from=2023-07-25&sortBy=publishedAt&apiKey=e3e193edc16b4458afa2f80672d03d22")
      .subscribe(res => this.SuccessGet(res), res => this.Error(res));
  }
  SuccessGet(res:any) {
    console.log(res);
    this.articles = res.articles;
    console.log(this.articles);
  }
  Error(res: any) {
    console.log(res);
  }
}
