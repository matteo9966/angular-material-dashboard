import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { SidebarHeaderComponent } from './components/sidebar/sidebar-header/sidebar-header.component';
import {MatDividerModule} from '@angular/material/divider';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidebar/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FixedFabButtonComponent } from "./components/fixed-fab-button/fixed-fab-button.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, MatSidenavModule, MatListModule, MatIconModule, SidebarHeaderComponent, MatDividerModule, ToolbarComponent, SidenavComponent, FooterComponent, FixedFabButtonComponent]
})
export class AppComponent {
  title = 'angular-material-project';
}
