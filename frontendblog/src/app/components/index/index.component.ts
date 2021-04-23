import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../shared/article.service'
import {Article} from '../../article'
import{Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  arti:Article;
  articles:Article[];
  private article:Article[]

  constructor(private _articleService:ArticleService,private router:Router) { }

  ngOnInit(): void {
    this.articles = []
    this.readArticles()
  }
  readArticles(){
    this._articleService.readArticle().subscribe(
      data=>{
        console.log(data);
        
        for(var i=0;i<data['msg'].length;i++)
        {
            this.arti={
              id:data['msg'][i]._id,title:data['msg'][i].title,
              description:data['msg'][i].description,markdown:data['msg'][i].markdown, createdAt:data['msg'][i].createdAt }
              this.articles.push(this.arti);
        }
      } ,
      error=>{
        console.log(error);
      }
    )

  }
  doUpdate(article){
    this._articleService.setter(article);
    this.router.navigate(['/edit'])
  }

  read(article){
    this._articleService.setter(article);
    this.router.navigate(['/show'])
  }

  doDelete(article){
    this._articleService.deleteArticle(article.id).subscribe(
      data=>{
          this.articles.splice(this.articles.indexOf(article),1);
      },
      error=>{

      }
    )
  }
}
