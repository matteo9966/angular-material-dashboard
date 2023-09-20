# Angular material - this shows how to customize the theme

I wrote this small project to explore and use Angular Material libary. I was very curious to check out its components and 
I realized that you can create very modern looking applications using this awesome tool.
For this project I created a responsive Dashboard with a few pages.

- Customized the angular material palette.
- Added responsive layout using the angular ResponsiveObservable sdk.
- theming: both light theme and dark theme are available using angular material theming system
## Theming:
  ![image](https://github.com/matteo9966/angular-material-dashboard/assets/75813215/5474e420-31e9-45fe-abec-1de27b2e7de5)
![image](https://github.com/matteo9966/angular-material-dashboard/assets/75813215/c5a89a14-041e-4aa3-a60c-8f79037b3929)

## Responsive:
![image](https://github.com/matteo9966/angular-material-dashboard/assets/75813215/56178ea0-388c-4163-9b5b-090475c62b2b)



```scss
@use "@angular/material" as mat;

@include mat.core(); //core: prerequisite styles for common features


//defining a palette with the define-palette function: 
$my-app-primary: mat.define-palette(mat.$indigo-palette);
$my-app-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);
$my-app-warn: mat.define-palette(mat.$red-palette);


//construct a theme by calling either define-light-theme or define-dark-theme
$my-app-theme: mat.define-light-theme( 
  (
    color: (
      primary: $my-app-primary,
      accent: $my-app-accent,
      warn: $my-app-warn,
    ),
  )
);

//mixin that emits styles for both color and typography and It’s the all-component-themes mixin
@include mat.all-component-themes($my-app-theme);

// mixin that emits all components' color styles and a "typography" mixin that emits all components’ typography styles
//  all-component-colors and  all-component-typographies
//  ^^^^^^^^^^^^^^^^^^^^      ^^^^^^^^^^^^^^^^^^^^^^^^^^




html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}

```

#### this is what a palette should look like:

```scss
$red-palette: (
  50: #ffebee,
  100: #ffcdd2,
  200: #ef9a9a,
  300: #e57373,
  // ...
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    // ...
  )
);

$pink-palette: (
  50: #fce4ec,
  100: #f8bbd0,
  200: #f48fb1,
  300: #f06292,
  // ...
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    // ...
  )
);

```

### using all-component-themes vs core-theme:

all-component-themes generates the css for al the angular/material components while
core-theme generates all the shared styles among the components and add component related
styles:

|----------------------|---------------|
|----------------------+---------------|
|       remove         |      add      |
|----------------------+---------------|
|all-component-themes  | core-theme    |
|                      |component-theme|
|----------------------+---------------|

example:

```scss
// @include mat.all-component-themes($my-app-theme); <-- removed
@include mat.core-theme($my-app-theme);
@include mat.button-theme($my-app-theme);

```


## Typography

```scss
@use "@angular/material" as mat;
$my-typography: mat.define-typography-config(); //define the default typography
```
## levels
you can define different levels for the typography:
- headline-1
- headline-2
- headline-3
- headline-4
- headline-5
- ...
- ...
- button
  there are many levels
    
```scss
//define a level
@use '@angular/material' as mat;

$my-custom-level: mat.define-typography-level(
  $font-family: Roboto,
  $font-weight: 400,
  $font-size: 1rem,
  $line-height: 1,
  $letter-spacing: normal,
);


$my-custom-typography-config: mat.define-typography-config(
  $headline-1: mat.define-typography-level(112px, 112px, 300, $letter-spacing: -0.05em),
  $headline-2: mat.define-typography-level(56px, 56px, 400, $letter-spacing: -0.02em),
  $headline-3: mat.define-typography-level(45px, 48px, 400, $letter-spacing: -0.005em),
  $headline-4: mat.define-typography-level(34px, 40px, 400),
  $headline-5: mat.define-typography-level(24px, 32px, 400),
  // ...
);
```


### Define a theme specific typography

```scss
$my-typography: mat.define-typography-config();

$my-theme: mat.define-light-theme((
 color: (
   primary: $my-primary,
   accent: $my-accent,
 ),
  typography: $my-typography,
));
```

### Define only the font for all typography levels
```scss
// Typography config based on the default, but using "Comic Sans" as the
  // default font family for all levels.
  $kids-typography: mat.define-typography-config(
    $font-family: 'Comic Sans',
  );

```

### customize your components typography:
This mixin also emits styles for native header elements scoped within the `.mat-typography` CSS class.

the index.html should look like :

```html
<body class="mat-typography mat-app-background">
  <app-root></app-root>
</body>
```

--> add `.mat-typography` to your class 
check the levels:
[components typograpy](https://material.angular.io/guide/typography#using-typography-styles-in-your-application)


## DARK THEME:

wrap the components inside a `.dark-theme` class and apply that class to the body when you want to see the dark theme

```scss
$my-app-dark-primary: mat.define-palette(mat.$blue-grey-palette);
$my-app-dark-accent: mat.define-palette(mat.$amber-palette, A200, A100, A400);
$my-app-dark-warn: mat.define-palette(mat.$deep-orange-palette);
$my-app-dark-theme: mat.define-dark-theme(
  (
    color: (
      primary: $my-app-dark-primary,
      accent: $my-app-dark-accent,
      warn: $my-app-dark-warn,
    ),
  )
);

.dark-theme {
  @include mat.core-color($my-app-dark-theme); //use only the core-color mixin not the theme-color 
  @include mat.button-color($my-app-dark-theme);
}
```


## Lazy loading theme:

suppose we have the dark theme inside here:

// src/styles/themes/dark.scss


inside angular.json:

```scss



"styles": [
              "src/styles.scss",
              {
                "input": "src/styles/themes/dark.scss",
                "bundleName": "dark-theme",
                "inject": false
              }
            ],
```

- create the style manager that handles the styles:

---

I created a simplified version of this manger, check out this:
https://gist.github.com/matteo9966/8a26d7ad8f0ad096c679a642e66d82c3

---

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StyleManager {
  isDark = false;

  toggleDarkTheme() {
    if (this.isDark) {
      this.removeStyle('dark-theme');
      document.body.classList.remove('dark-theme');
      this.isDark = false;
    } else {
      const href = 'dark-theme.css';
      getLinkElementForKey('dark-theme').setAttribute('href', href);
      document.body.classList.add('dark-theme');
      this.isDark = true;
    }
  }

  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}
```

## Apply Angular Material’s theme to custom component

extract all theme related stuff of the component into a separate file and put the in a mixin:

// _alert-theme.scss
```scss
//suppose you have an alert component and has these colors:
@mixin color($theme) {
  .alert {
    color: #084298;
    background-color: #cfe2ff;
    border-color: #b6d4fe;

    .alert-link {
      color: #06357a;
    }
  }
}

@mixin typography($theme) {
  .alert {
    .alert-heading {
      font-size: calc(
        1.275rem + 0.3vw
      );
    }
    .alert-footer {
      font-size: 80%;
    }
  }
}

```

### 2 use the values from the theme

```scss
@use 'SASS:map';
@use '@angular/material' as mat;

$color-config:    mat.get-color-config($theme);
$primary-palette: map.get($color-config, 'primary');
$accent-palette:  map.get($color-config, 'accent');
$warn-palette:    map.get($color-config, 'warn');
$is-dark-theme:   map.get($color-config, 'is-dark');
```


## typography levels are:
- headline-1, 
- headline-2,
-  headline-3,
-   headline-4,
-    headline-5,
-     headline-6,
-      subtitle-1,
-       subtitle-2,
-        body-1,
-         body-2,
-          caption,
-           button,
-            overline,
-             font-family.
