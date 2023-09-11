import { Injectable, inject, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  rendererFactory = inject(RendererFactory2);
  renderer: Renderer2;

  isDark = false;
  private darkIcon = 'dark_mode';
  private lightIcon = 'light_mode';

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  get currentIcon() {
    if (this.isDark) {
      return this.darkIcon;
    }
    return this.lightIcon;
  }

  toggleMode() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.addDarkClassToBody();
    } else {
      this.removeDarkClassFromBody();
    }
  }

  private removeDarkClassFromBody() {
    this.renderer.removeClass(document.body, 'dark');
  }
  private addDarkClassToBody() {
    this.renderer.addClass(document.body, 'dark');
  }
}
