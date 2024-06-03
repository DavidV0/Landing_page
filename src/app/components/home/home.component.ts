import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, CommonModule, ProductComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
