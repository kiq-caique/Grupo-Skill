// teste com biblioteca faker-js para criar usuários e email
const { faker } = require("@faker-js/faker");

faker.locale = "pt_BR";
const randomName = faker.name.fullName();
const randomEmail = faker.internet.email(randomName);

console.log(randomName);
console.log(randomEmail);
