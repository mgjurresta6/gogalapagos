import { Routes } from '@angular/router';
import { ComplementoPruebaComponent } from './complemento-prueba/complemento-prueba.component';
import { PdfComponent } from './pdf/pdf.component';

export const routes: Routes = [
    { path: '', component: ComplementoPruebaComponent },
   { path: 'pdf', component: PdfComponent } //Ejemplo de ruta de componente
];
