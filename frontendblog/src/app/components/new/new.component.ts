import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ArticleService} from '../../shared/article.service';
import {Article} from '../../article';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  article:Article;
  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.article={
      id:'',
      title:'',
      description:'',
      markdown:'',
      createdAt:null
    }
  }
  New(){
    this.articleService.createArticle(this.article).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
      console.log(error);
      }
    

    )
  }
}
