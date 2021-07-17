import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Product} from '@shared/interfaces/product.interface';

@Component({
  selector: 'ltc-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product: Product;
}
