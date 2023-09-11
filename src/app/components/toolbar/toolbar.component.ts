import { ChangeDetectionStrategy, Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatButtonModule,MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
themeService = inject(ThemeService);

toggleTheme(){
  this.themeService.toggleMode();
}

get currentThemeIcon(){
 return this.themeService.currentIcon
}

}
