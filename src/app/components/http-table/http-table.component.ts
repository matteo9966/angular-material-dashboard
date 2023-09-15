import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable, catchError, of, map, tap } from 'rxjs';
import {
  GithubIssue,
  Issue,
} from 'src/app/models/http-table-example.interface';
import { SortDirection } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './http-table.component.html',
  styleUrls: ['./http-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HttpTableComponent {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  data$!: Observable<GithubIssue[]>;
  loading = false;
  constructor(private httpClient: HttpClient) {
    this.data$ = this.getIssues();
  }

  getIssues(page: string = '1', order?: SortDirection) {
    this.loading = true;
    const data = { page }; //create the queryparams
    const searchParams = new URLSearchParams(data);
    const apiURL = `https://api.github.com/search/issues?q=repo:angular/components&${searchParams}`;
    return this.httpClient.get<Issue>(apiURL).pipe(
      tap(() => {
        this.loading = false;
      }),
      map((data) => data.items || []),
      catchError(() => of([] as GithubIssue[]))
    );
  }
}
