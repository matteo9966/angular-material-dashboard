import { InjectionToken } from '@angular/core';
import { routesConfig } from './routes';
export const ROUTES_CONFIG = new InjectionToken('routesConfig', {
  factory: () => routesConfig,
});
