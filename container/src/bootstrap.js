import { mount as MountProductsIndex } from 'products/ProductsIndex';
import { mount as CartMount } from 'cart/Cart';

MountProductsIndex(document.querySelector('#products-list'));
CartMount(document.querySelector('#cart-message'));