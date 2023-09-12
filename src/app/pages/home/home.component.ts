import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientCardComponent } from 'src/app/components/shared/gradient-card/gradient-card.component';
import { SubscribeFormComponent } from 'src/app/components/subscribe-form/subscribe-form.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { SidenavComponent } from '../../components/sidebar/sidenav/sidenav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,GradientCardComponent,SubscribeFormComponent,MatSidenavModule,SidenavComponent,ToolbarComponent,RouterOutlet,FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  
}
