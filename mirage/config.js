export default function() {

  this.namespace = 'api';

  this.get('/bands', (schema, request) => {
    return schema.bands.all();
  });

  this.get('/bands/:id/songs', (schema, request) => {
    let band = schema.bands.find(request.params.id);

    return band.songs;
  });

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
