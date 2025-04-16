import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./home/home.component').then((h)=>h.HomeComponent)},
    {path:'about',loadComponent:()=>import('./about/about.component').then((b)=>b.AboutComponent)},
    {path:'contact',loadComponent:()=>import('./contact/contact.component').then((c)=>c.ContactComponent)},
    {path:'product',loadComponent:()=>import('./product/product.component').then((p)=>p.ProductComponent)},
    {path:'**',loadComponent:()=>import('./not-found/not-found.component').then((n)=>n.NotFoundComponent)}
];
