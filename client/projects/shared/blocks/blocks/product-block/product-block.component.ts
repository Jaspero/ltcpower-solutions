import {Component, OnInit, ChangeDetectionStrategy, ElementRef, Input} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';
import {AngularFirestore} from '@angular/fire/firestore';


interface Specifications {
  title?: string;
  image?: string;
  label?: string;
  value?: string;
  specLabel?: string;
  specValue?: string;
}

interface SpecificationsOptions extends CommonOptions {
  specifications: Specifications[];
}

@Component({
  selector: 'jms-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBlockComponent extends CommonBlockComponent implements OnInit {
  constructor(
    public el: ElementRef,
    private afs: AngularFirestore,
  ) { super(el); }
  @Input()
  data: SpecificationsOptions;


  ngOnInit(): void {
  }

}
