import {
  ChangeDetectionStrategy,
  Component,
  Input,
  HostBinding,
  Renderer2,
  HostListener,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// a component for the new dashboard
@Component({
  selector: 'app-fixed-fab-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './fixed-fab-button.component.html',
  styleUrls: ['./fixed-fab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixedFabButtonComponent {
  private renderer = inject(Renderer2);
  private darkIcon = 'dark_mode';
  private lightIcon = 'light_mode';
  private isDark = false;
  currentIcon = this.darkIcon;

  @HostListener('click')
  clickOnButton() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.currentIcon = this.lightIcon;
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.currentIcon = this.darkIcon;
      this.renderer.removeClass(document.body, 'dark');
    }
  }


}
