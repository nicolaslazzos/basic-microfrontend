import { faker } from '@faker-js/faker';

document.querySelector('#cart-message').innerHTML = `<div>You have ${faker.random.numeric()} items in your cart</div>`