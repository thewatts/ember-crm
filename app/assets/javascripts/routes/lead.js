App.LeadRoute = Ember.Route.extend({
  model: function(params) { this.store.find('lead', params.id); }
});
