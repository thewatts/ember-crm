//= require jquery
//= require jquery_ujs
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./app

// for more details see: http://emberjs.com/guides/application/
App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,

  rootElement: "#ember-app"
});

console.log('testing');

//= require_tree .
