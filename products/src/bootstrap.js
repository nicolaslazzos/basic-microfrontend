import { faker } from '@faker-js/faker';

export const mount = (element) => {
  element.innerHTML = Array.from(Array(5).keys()).map(() => `<div>${faker.commerce.product()}</div>`).join('');
};

if (process.env.NODE_ENV == 'development') {
  const element = document.querySelector('#products-list-dev');

  // if we are in dev mode and running this project in isolation (not through the container), mount the element
  if (element) mount(element);
} 