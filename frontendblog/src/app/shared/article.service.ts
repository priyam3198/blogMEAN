import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../article';

@Injectable()
export class ArticleService {
  private article:Article;
  private baseUri:string = "http://127.0.0.1:8080"
  private headers = new HttpHeaders().set('Content-Type','application/json')
  constructor(private http: HttpClient) { }
  createArticle(article: Article){
    return this.http.post(this.baseUri+'/create',article,{headers:this.headers});
  }
  readArticle(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }
  updateArticle(article: Article){
    return this.http.put(this.baseUri+'/update',article,{headers:this.headers});
  }
  deleteArticle(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }
  setter(article:Article){
    this.article=article;
  
  }
  getter(){
    return this.article;
  }
}
