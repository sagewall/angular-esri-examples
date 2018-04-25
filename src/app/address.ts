import { AddressAttributes } from './address-attributes';
import { AddressGeometry } from './address-geometry';

export interface Address {
  attributes: AddressAttributes;
  geometry: AddressGeometry;
}
