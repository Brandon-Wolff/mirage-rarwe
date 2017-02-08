import { test } from 'qunit';
import moduleForAcceptance from 'mirage-rarwe/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bands');

test('I can view the bands', function(assert) {
  let bands = server.createList('band', 3);

  visit('/bands');

  andThen(function() {
    assert.equal(find('li').length, 3);
    assert.equal(find('li:first').text(), bands[0].name);
  });
});
