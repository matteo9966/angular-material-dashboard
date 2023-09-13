import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatChipsModule,
  MatChipListbox,
  MatChipOption,
} from '@angular/material/chips';
@Component({
  selector: 'app-table-display-columns',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './table-display-columns.component.html',
  styleUrls: ['./table-display-columns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDisplayColumnsComponent implements OnInit {
  ngOnInit(): void {
    this.allOptions = [...this.options]
  }



  allOptions:string[] = []
  
  @Output() optionsChange: EventEmitter<string[]> = new EventEmitter();
  @Input() options: string[] = [];

  @ViewChild(MatChipListbox) listbox!: MatChipListbox;
  onSelectedChange($event: any) {
    const selected = this.listbox.selected;
    const values = (<MatChipOption[]>selected).map((c) => c.value) || [];
    this.optionsChange.emit(values);
  }
}
