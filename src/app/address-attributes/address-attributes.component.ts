import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-address-attributes',
  templateUrl: './address-attributes.component.html',
  styleUrls: ['./address-attributes.component.sass']
})
export class AddressAttributesComponent implements OnInit {

  private _address: Address;

  @Input()
  set address(address: Address) {
    this._address = address;
  }

  get address(): Address {
    return this._address;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
