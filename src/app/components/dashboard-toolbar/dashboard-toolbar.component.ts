import { ChangeDetectionStrategy, Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardToolbarSearchComponent } from '../dashboard-toolbar-search/dashboard-toolbar-search.component';
@Component({
  selector: 'app-dashboard-toolbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule,DashboardToolbarSearchComponent,MatIconModule],
  templateUrl: './dashboard-toolbar.component.html',
  styleUrls: ['./dashboard-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardToolbarComponent {
  @Input() showNavbarToggleButton=false;
  @Output() toggleMenu = new EventEmitter();

  onToggleMenu(){
    this.toggleMenu.emit();
   }
}
