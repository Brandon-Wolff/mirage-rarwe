export default function() {

  this.resource('bands');
  this.resource('songs');
  this.patch('/songs/:id', function({ songs }, request) {
    let id = request.params.id;
    let attrs = this.normalizedRequestAttrs();

    return songs.find(id).update(attrs);
  });
  this.get('/bands/:id/songs');
  this.post('/bands/:id/songs');
  this.get('/bands/:id/songs/:id');
  this.put('/bands/:id/songs/:id');
  this.patch('/bands/:id/songs/:id');

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
