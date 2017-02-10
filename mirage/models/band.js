import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  rating: 0,
  songs: hasMany('song')
});
