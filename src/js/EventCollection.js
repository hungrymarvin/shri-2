define('EventCollection', ['backbone', 'EventModel'], function (Backbone, EventModel) {
  return Backbone.Collection.extend({
    model: EventModel
  })
});
