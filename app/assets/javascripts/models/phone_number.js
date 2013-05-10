App.PhoneNumber = DS.Model.extend({
  number:  DS.attr('string'),
  contact: DS.belongsTo('App.Contact'),
  sharing_link_facebook: DS.attr('string'),
  sharing_link_twitter: DS.attr('string'),
  audio_file: DS.attr('string')
});