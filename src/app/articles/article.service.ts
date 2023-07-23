import { Injectable, inject, signal } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Article } from './article-list/article.interface';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class ArticleService {

  private http: HttpClient = inject(HttpClient);
  private url:string = 'http://localhost:3000/articles';
  // start json-server --watch src/api/dbjson

  run(){
    console.log('ArticleService')
  }

  public getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.url);
  }

  public deleteArticle(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  public modifyArticle(id : number, article : Article){
    return this.http.patch(`${this.url}/${id}`, article);
  }
}

