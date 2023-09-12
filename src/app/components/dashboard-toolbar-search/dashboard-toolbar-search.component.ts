import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard-toolbar-search',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatFormFieldModule,MatIconModule],
  templateUrl: './dashboard-toolbar-search.component.html',
  styleUrls: ['./dashboard-toolbar-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardToolbarSearchComponent {

}
