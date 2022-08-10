import { faker } from '@faker-js/faker';

export const mount = (element) => {
  element.innerHTML = `<div>You have ${faker.random.numeric()} items in your cart</div>`;
};

if (process.env.NODE_ENV == 'development') {
  const element = document.querySelector('#cart-message-dev');

  // if we are in dev mode and running this project in isolation (not through the container), mount the element
  if (element) mount(element);
} 