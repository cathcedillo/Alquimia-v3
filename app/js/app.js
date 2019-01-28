var app = new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  conexionCamunda () {
    axios
      .post("http://localhost:8080/engine-rest/process-definition/key/ObtieneTokenAlquimia/start")
      .then(response => console.log("Exitosa",response))
      .catch(error => console.log(error))
  }
})
