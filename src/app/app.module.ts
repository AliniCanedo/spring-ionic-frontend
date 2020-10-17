import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { MyApp } from './app.component';
import { AuthService } from './services/auth.service';
import { CartService } from './services/domain/cart.service';
import { CategoriaService } from './services/domain/categoria.service';
import { ClienteService } from './services/domain/cliente.service';
import { ProdutoService } from './services/domain/produto.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CategoriaService, AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    ClienteService,
    ProdutoService,
    CartService

  ]
})
export class AppModule { }
