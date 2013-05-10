App.Adapter = DS.RESTAdapter.extend({
  bulkCommit: false
});

App.Adapter.map('App.Contact', {
  phoneNumbers: {embedded: 'always'}
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter:  DS.RESTAdapter.create()
});

App.secondStore = DS.Store.extend({
	revision:12,
	adapter: DS.RESTAdapter.create({namespace: 'api/v1'})
	
})



