import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../article-list/article.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent {

  @Input() public article: Article = {} as Article;
  @Output() public deleteArticle = new EventEmitter<Article>();
  @Output() public modifyArticle = new EventEmitter<Article>();
  
  public originalArticle: Article = {} as Article;
  public isEdit:boolean = false;

  doModifyArticle(){
    this.modifyArticle.emit(this.article);
    this.isEdit = false;
  }

  doCancelEdited(){
    console.log('doCancel article', this.article.title)
    console.log('Return original article', this.originalArticle.title)
    this.article = Object.assign({}, this.originalArticle)
    this.isEdit = false;
  }

  //public doArticleDelete = (article: Ariticle) => this.delete.emit(article);
  doDeleteArticle() {
    this.deleteArticle.emit(this.article);
  }
  
  ngOnChanges({article}: SimpleChanges) {
    if(article) {
      console.log('onchange ', article.currentValue)
      this.originalArticle = article.currentValue;
      this.article = Object.assign({}, article.currentValue)
    }
  }
}
