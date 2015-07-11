Package.describe({
  name: 'mtrcherish:cherish-button',
  version: '0.0.1',
  summary: 'A simple button with button states',
  git: 'https://github.com/mtr-cherish/cherish-button.git'
});

Package.onUse(function onUse(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['client/cherishButton.html', 'client/cherishButton.js'], 'client');
  api.use(['templating'], 'client');
});