import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarHeaderComponent } from '../sidebar-header/sidebar-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    SidebarHeaderComponent,
    RouterLink
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  
  pages = [
    {label:'Homepage',icon:'home',routerLink:'home'},
    {label:'About us',icon:'quiz',routerLink:'about'},
    {label:'Where to find us',icon:'pin_drop',routerLink:'where-to-find-us'},
  ] 

}
