App.User = DS.Model.extend ({
  email:        DS.attr('string'),
  password: DS.attr('string'),
  contacts:       DS.hasMany('App.Contacts'),



});

