Package.describe({
  name: 'intercom',
  summary: 'Intercom package',
  version: '1.0.0'
});
Package.onUse(function(api) {
  api.addFiles('intercom_loader.js', 'client');
  api.add_files('intercom_server.js', 'server');
  api.export('IntercomHash', 'server');
});
