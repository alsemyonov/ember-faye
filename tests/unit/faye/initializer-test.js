import Ember from 'ember';
import FayeInitializer from 'dummy/faye/initializer';
import { module, test } from 'qunit';

const { Application, run } = Ember;

let application;

module('Unit | Initializer | faye', {
  beforeEach() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  FayeInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
