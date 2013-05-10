App.UserSessionNewView = EF.Form.extend ({
  templateName: 'userSessionNew',
  save: function(data) {
    this.get('controller').signInOrUp(data.email, data.password)
    }
  });