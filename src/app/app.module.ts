import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DijagnozaComponent } from './dijagnoza/dijagnoza.component';
import { BolnicaComponent } from './bolnica/bolnica.component';
import { OdeljenjeComponent } from './odeljenje/odeljenje.component';
import { PacijentComponent } from './pacijent/pacijent.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';
import { Routes, RouterModule } from '@angular/router';
import { DijagnozaService } from './service/dijagnoza.service';
import { DijagnozaDialogComponent } from './dialog/dijagnoza-dialog/dijagnoza-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { BolnicaDialogComponent } from './dialog/bolnica-dialog/bolnica-dialog.component';
import { PacijentDialogComponent } from './dialog/pacijent-dialog/pacijent-dialog.component';
import { OdeljenjeDialogComponent } from './dialog/odeljenje-dialog/odeljenje-dialog.component';
import { BolnicaService } from './service/bolnica.service';
import { OdeljenjeService } from './service/odeljenje.service';
import { PacijentService } from './service/pacijent.service';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'},
                {path: 'dijagnoza', component: DijagnozaComponent},
                {path: 'bolnica', component: BolnicaComponent},
                {path: 'odeljenje', component: OdeljenjeComponent},
                {path: 'pacijent', component: PacijentComponent},
                {path: 'home', component: HomeComponent},
                {path: 'author', component: AuthorComponent},
                {path: 'about', component: AboutComponent}];

@NgModule({
  declarations: [
    AppComponent,
    DijagnozaComponent,
    BolnicaComponent,
    OdeljenjeComponent,
    PacijentComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    DijagnozaDialogComponent,
    BolnicaDialogComponent,
    PacijentDialogComponent,
    OdeljenjeDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue:'en-GB'}, DijagnozaService, BolnicaService, OdeljenjeService, PacijentService],
  bootstrap: [AppComponent]
})
export class AppModule { }