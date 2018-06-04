import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MypipePipe } from './pipe/mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    ReactiveComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
	FormsModule, // 双向数据绑定
	ReactiveFormsModule // 响应式编程
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
