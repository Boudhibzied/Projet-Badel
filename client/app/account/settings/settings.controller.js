'use strict';

class SettingsController {
  constructor(Auth,$state) {
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.$state.go('Home');
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('projetBadelApp')
  .controller('SettingsController', SettingsController);
