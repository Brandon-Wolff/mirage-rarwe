import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  rating: 0,
  band: belongsTo('band')
});
