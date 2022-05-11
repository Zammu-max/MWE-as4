import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookinglistPageRoutingModule } from './bookinglist-routing.module';

import { BookinglistPage } from './bookinglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookinglistPageRoutingModule
  ],
  declarations: [BookinglistPage]
})
export class BookinglistPageModule {}
