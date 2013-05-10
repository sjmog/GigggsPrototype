
App.Authorization = Ember.Object.extend({
  action: '',
  object: null,
  response: 401,
  urlBase: ApiUrl.authorization_path,
  can: (function() {
    return this.get('response') === 200;
  }).property('response'),
  authorize: function() {
    var cName, id, obj;
    obj = this.get('object');
    cName = obj.toString();
    id = null;
    if (Ember.typeOf(obj) === "instance") {
      cName = cName.split(':')[0].split('.')[1];
      id = obj.get('id');
    }
    $.ajax({
      url: "" + (this.get('urlBase')) + ".json",
      context: this,
      type: 'GET',
      data: {
        action: this.get('action'),
        cName: cName,
        id: id
      },
      complete: function(data, textStatus, xhr) {
        return this.set('response', data.status);
      }
    });
    return this.get('can');
  }
});
