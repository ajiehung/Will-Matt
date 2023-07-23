import { Component } from '@angular/core';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ArticleService } from './articles/article.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleListComponent, FooterComponent, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ArticleService]
})
export class AppComponent {
  public keyword:string = '';
}
