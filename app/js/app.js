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
    errors: []
  },
  methods: {
    checkForm: function (e) {
      if (this.user && this.password) {
        return true;
        conexionCamunda();
      }
      this.errors = [];
      if (!this.user) {
        this.errors.push('User required.');
      }
      e.preventDefault();
    },
    conexionCamunda: function () {
      axios
        .post("http://localhost:8080/engine-rest/process-definition/key/ObtieneTokenAlquimia/start",{
          user: this.user,
          password: this.password
        })
        .then(response => console.log("Exitosa",response))
        .catch(error => console.log(error))
    }
  }
})
