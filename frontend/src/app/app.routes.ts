import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: NotesComponent,},
    {path: 'login', component: LoginComponent,}
];
