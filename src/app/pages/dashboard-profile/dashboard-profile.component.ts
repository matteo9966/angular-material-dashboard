import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageCardComponent } from 'src/app/components/background-image-card/background-image-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
@Component({
  selector: 'app-dashboard-profile',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundImageCardComponent,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
  ],
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardProfileComponent {
  profilePicture = 'assets/images/profile-picture.jpg';
  breakpointObserver = inject(BreakpointObserver);
  isSmallDevice$;

  constructor() {
    this.isSmallDevice$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map((result) => {
          return result.matches;
        })
      );
  }

  messages = [
    {
      author: 'Jhordan Peterson jr.',
      messagePreview: 'Something new to say never regret what you did!',
      profilePic:
        'https://demos.creative-tim.com/material-dashboard-pro/assets/img/kal-visuals-square.jpg',
    },
    {
      author: 'Marie Roxy',
      messagePreview: "It's never the best time but we have to speak...",
      profilePic:
        'https://demos.creative-tim.com/material-dashboard-pro/assets/img/marie.jpg',
    },
    {
      author: 'Armanda Diaz',
      messagePreview: 'Nice to have you in the company.',
      profilePic:
        'https://demos.creative-tim.com/material-dashboard-pro/assets/img/ivana-square.jpg',
    },
    {
      author: 'Jhonatan Rego',
      messagePreview: 'This is a great time of the year to try something new!',
      profilePic:
        'https://demos.creative-tim.com/material-dashboard-pro/assets/img/team-4.jpg',
    },
    {
      author: 'Marco Sinatra',
      messagePreview: 'Buongiorno amica cara! Aspetto notizie...',
      profilePic:
        'https://demos.creative-tim.com/material-dashboard-pro/assets/img/team-3.jpg',
    },
    {
      author: 'Nino Mars',
      messagePreview: 'Nothing to say 🙂',
      profilePic:
        'https://demos.creative-tim.com/material-dashboard-pro/assets/img/bruce-mars.jpg',
    },
  ];
}
