## 1 Setup M3 Theme

### 1.1 Use material-experimental

```scss
@use "@angular/material-experimental" as matx;
```

### 1.2 Create M3 theme

```scss
$light-theme: matx.define-theme(
  (
    color: (
      primary: matx.$m3-azure-palette,
      tertiary: matx.$m3-blue-palette,
    ),
  )
);
$dark-theme: matx.define-theme(
  (
    color: (
      theme-type: dark,
      primary: matx.$m3-magenta-palette,
      tertiary: matx.$m3-violet-palette,
    ),
  )
);

```

### 1.3 Use M3 theme

```scss
html {
  @include mat.all-component-themes($light-theme);
  background: mat.get-theme-color($light-theme, surface);

  &.dark {
    @include mat.all-component-colors($dark-theme);
    background: mat.get-theme-color($dark-theme, surface);
  }
}

```

## 2. Create application skeleton

### 2.1 Use navigation schematics to generate layout

```bash
ng generate @angular/material:navigation core/layout
```

### 2.2 Add content project in layout

```html
<!-- Add Content Here -->
<ng-content></ng-content>

```

## 3. Use layout component

### 3.1 Import layout in app component

```ts
import { LayoutComponent } from './core/layout/layout.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
 })
export class AppComponent {}

```

### 3.2 Use layout in app template

```html
<app-layout>
  <router-outlet></router-outlet>
</app-layout>

```

## 4. Apply theme to layout

### 4.1 New file _layout.component.theme.scss

```scss
@use "@angular/material" as mat;

@mixin theme($theme) {
  .sidenav {
    background-color: mat.get-theme-color($theme, surface-bright);
  }
}

```

### 4.2 Use layout-theme in styles

```scss
@use "./app/core/layout/layout.component.theme" as layout-theme;

html {
  @include layout-theme.theme($light-theme);
   &.dark {
    @include layout-theme.theme($dark-theme);
  }
}

```

## 5. Create Pages

```bash
ng generate @angular/material:dashboard dashboard
ng generate @angular/material:address-form address-form
ng generate @angular/material:table table
ng generate @angular/material:tree tree
ng generate @angular/cdk:drag-drop drag-drop

```

### 5.1. Update routes

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
      title: 'Dashboard'
  },
  {
    path: 'address',
    loadComponent: () =>
      import('./address-form/address-form.component').then(
        (c) => c.AddressFormComponent
      ),
      title: 'Address'
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./table/table.component').then(
        (c) => c.TableComponent
      ),
      title: 'Table'
  },
  {
    path: 'tree',
    loadComponent: () =>
      import('./tree/tree.component').then(
        (c) => c.TreeComponent
      ),
      title: 'Tree'
  },
  {
    path: 'drag-drop',
    loadComponent: () =>
      import('./drag-drop/drag-drop.component').then(
        (c) => c.DragDropComponent
      ),
      title: 'Drag-Drop'
  },
];
```

### 5.2 Updates in layout

#### 5.2.1 Use routes in layout component

```ts
@Component({
  selector: 'app-layout',
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class LayoutComponent {
  rootRoutes = routes.filter(r=>r.path);
}

```

#### 5.2.2 Update layout template

```html
<mat-nav-list>
  @for (item of rootRoutes; track $index) {
    <a
      mat-list-item
      [routerLink]="item.path"
      #link="routerLinkActive"
      routerLinkActive
      [activated]="link.isActive"
    >
      {{ item.title }}
    </a>
  }
</mat-nav-list>

```