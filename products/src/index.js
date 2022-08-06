import { faker } from '@faker-js/faker';

document.querySelector('#products-list').innerHTML = Array.from(Array(5).keys()).map(() => `<div>${faker.commerce.product()}</div>`).join('');