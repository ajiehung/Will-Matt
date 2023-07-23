import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Article } from '../article-list/article.interface';

@Component({
  selector: 'app-article-body',
  standalone: true,
  imports: [],
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent {

  @Input() article:Article = {} as Article;

}
