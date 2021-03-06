Meteor.subscribe('posts');

Session.set("Mongol", {
  'collections': ['Posts', 'Comments', 'Notifications'],
  'display': true,
  'opacity_normal': ".7",
  'opacity_expand': ".9",
});

window.intercomSettings = {
  // TODO: The current logged in user's full name
  name: 'John Doe',
  // TODO: The current logged in user's email address
  email: 'john.doe@example.com',
  // TODO: The current logged in user's sign-up date as a Unix timestamp
  created_at: 1234567890,
  app_id: 'n5mvjfnv'
};

Tracker.autorun(function() {
  if(Meteor.user() && !Meteor.loggingIn()) {
    var intercomSettings = {
      name: Meteor.user().username,
      email: Meteor.user().emails[0].address,
      created_at: Math.round(Meteor.user().createdAt / 1000),
      favorite_color: _.sample(['blue', 'red', 'green', 'yellow']),
      user_id: Meteor.user()._id,
      user_hash: Meteor.user().intercomHash,
      widget: {
        activator: "#Intercom",
        use_counter: true
      },
      app_id: 'n5mvjfnv'
    };
    Intercom('boot', intercomSettings);
  }
});
