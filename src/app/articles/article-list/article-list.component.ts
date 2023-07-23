import { Component, OnInit, inject, OnChanges, WritableSignal, signal } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { ArticleHeaderComponent } from '../article-header/article-header.component';
import { ArticleBodyComponent } from '../article-body/article-body.component';
import { Article } from './article.interface';
import { ArticleService } from 'src/app/articles/article.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [NgFor, ArticleHeaderComponent, ArticleBodyComponent, AsyncPipe],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit{

  private articleService = inject(ArticleService);
  public articles:WritableSignal<Article[]> = signal([]);

  public async onDeleteArticle(article: Article): Promise<void>{
    await lastValueFrom(this.articleService.deleteArticle(article.id));
  }

  public async onModifyArticle(article: Article): Promise<void>{
    await lastValueFrom(this.articleService.modifyArticle(article.id, article));
  }
 
  async ngOnInit(): Promise<void> {
    console.log('list component OnInit')
    this.articles.set(await lastValueFrom(this.articleService.getArticles()));
  }
 }

