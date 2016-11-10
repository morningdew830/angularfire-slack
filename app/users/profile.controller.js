/**
 * Created by Coder on 11/10/2016.
 */

angular.module('angularfireSlackApp')
  .controller('ProfileCtrl', function($state, md5, auth, profile) {
    var profileCtrl = this;
    profileCtrl.profile = profile;
    profileCtrl.updateProfile = function() {
      profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
      profileCtrl.profile.$save();
    };
  });
