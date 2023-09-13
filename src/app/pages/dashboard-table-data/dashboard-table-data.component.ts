import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageCardComponent } from 'src/app/components/background-image-card/background-image-card.component';
import { BackgroundImageCardHeaderComponent } from 'src/app/components/background-image-card-header/background-image-card-header.component';
import { TableComponent } from 'src/app/components/shared/table/table.component';

@Component({
  selector: 'app-dashboard-table-data',
  standalone: true,
  imports: [CommonModule,BackgroundImageCardComponent,BackgroundImageCardHeaderComponent,TableComponent],
  templateUrl: './dashboard-table-data.component.html',
  styleUrls: ['./dashboard-table-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTableDataComponent {

}
