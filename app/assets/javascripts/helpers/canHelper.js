
Ember.Handlebars.registerBoundHelper('can', function(object, options) {
  var permission;
  permission = App.Authorization.create({
    action: options.hash.action,
    object: object
  });
  permission.authorize();
  options.contexts = [permission];
  return Ember.Handlebars.helpers.boundIf.call(permission, "can", options);
});
