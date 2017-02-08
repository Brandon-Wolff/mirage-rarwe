import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.list.cycle('Led Zeppelin', 'Pearl Jam', 'Foo Fighters'),
  id(i) { return `${i}`; }
});
