<template>
  <div class="card-div">
    <div class="card-image" :style="{ backgroundImage: 'url('+ image +')'}"></div>
    <div class="card-text-div py-2 px-3">
      <h2 class="card-heading mt-3 mb-2 fs18 rale fw6">{{title}}</h2>
      <p class="card-text fs14 mont fw4">
        {{text}}
      </p>
    </div>
  </div>
</template>
<!--=============================================================================-->
<!--=================================================================SCRIPTS=====-->
<!--=============================================================================-->
<script>
export default {
  name: "project-card",
  props: ['url', 'title', 'text'],
  data() {
    return{
      image: ""
    }
  },
 
  methods: {
    path(url) {
      return require('../../images/backgrounds/' + url + '.jpg');
    }
  }, 
  mounted() {
    this.image = this.path(this.url);
  }
}
</script>
<!--===============================================================================-->
<!--===================================================================STYLING=====-->
<!--===============================================================================-->
<style>
.card-div{
  position: relative;
  margin: 0;
  height: 55vh;
  min-height: 330px;
  padding: 0;
  width: 100%;
  background:white;
  border-radius: 5px !important;
  border: 1px solid #00000055;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.02);
  overflow: hidden !important;}
.card-div:hover{ box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);}
.card-image{
  background: no-repeat center top;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 65%;}
.card-text-div{
  position: absolute;
  overflow: hidden;
  width: 100%;
  bottom: 0px;
  left: 0;
  background: white;
  vertical-align: middle;
  height: auto;
  min-height: 35%;
  }
.card-heading{color: #4EA792 !important;}
.card-text{color: #000000EE !important;}
</style>
