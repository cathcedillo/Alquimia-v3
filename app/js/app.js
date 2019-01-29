require("bootstrap/dist/css/bootstrap.css");

import Vue from "vue";

new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  conexionCamunda () {
    axios
      .post("http://localhost:8080/engine-rest/process-definition/key/ObtieneTokenAlquimia/start",{
        "user": "acedillo@solmipro.com",
        "password": "7h8j9k0l"
      })
      .then(response => console.log("Exitosa",response))
      .catch(error => console.log(error))
  }
})
