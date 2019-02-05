require("bootstrap/dist/css/bootstrap.css");
require("@fortawesome/fontawesome-free/css/all.min.css");
require("./../css/style.css");
var axios = require("axios");

import Vue from "vue";

new Vue({
  el: '#app',
  data: {
    user: null,
    password: null,
    errors: [],
    info: null
  },
  methods: {
    // checkForm: function (e) {
    //   if (this.user && this.password) {
    //     return true;
    //     conexionCamunda();
    //   }
    //   this.errors = [];
    //   if (!this.user) {
    //     this.errors.push('User required.');
    //   }
    //   e.preventDefault();
    // },
    conexionCamunda: function () {
      axios
        .post("https://apvitae.alquimiadigital.mx/cpanel/index.php/api/oauth2/token",{
          "grant_type": "password",
          "username": this.user,
          "password": this.password,
          "client_id": "testclient",
          "client_secret": "testpass"
        })
        .then(response => (this.info = response))
        .catch(error => console.log(error))
    }
  }
})
