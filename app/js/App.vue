<script>
  (() => import("bootstrap/dist/css/bootstrap.css"))();
  (() => import("bootstrap-vue/dist/bootstrap-vue.css"))();
  (() => import("babel-polyfill"))();
  (() => import("@fortawesome/fontawesome-free/css/all.min.css"))();

  import "./../css/style.css";

  var axios = require('axios');

  export default {
    name: "app",
    components: {
      message
    },
    mixins: [],
    directives: {},
    props: {},
    data: function(){
      return {};
    },
    computed: {},
    watch: {},
    filters: {},
    methods: {

      conexionCamunda () {
        axios
          .post("https://apvitae.alquimiadigital.mx/cpanel/index.php/api")
          .then(response => console.log("Exitosa",response))
          .catch(error => console.log(error))
      }
      // getToken(){
      //   return this.$store.state.neysla.config.token.value;
      // }
    }
  }
</script>
<style>

</style>
