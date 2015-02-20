Meteor.subscribe('posts');

Session.set("Mongol", {
  'collections': ['Posts', 'Comments', 'Notifications'],
  'display': true,
  'opacity_normal': ".7",
  'opacity_expand': ".9",
});
