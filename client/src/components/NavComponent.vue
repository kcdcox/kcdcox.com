<template>

  <div class="nav-bar" 
    v-on:mouseleave="navup=true" 
    :style="{height: (navup) ? '55px':'225px'}">

    <router-link to="/">
      <img src="../images/logo/kclogoWGP.png" 
        class="Me" :class="{imageRight: 
        hamout,imageLeft:(!hamout)}">
      <img src="../images/logo/kclogoWPG.png" 
        class="Me ontop"  
        :class="{imageRight: hamout,imageLeft:(!hamout)}">
    </router-link>

    <div id="hamburger" 
      @click="navup = !navup"
      :style="{display: (hamout) ? 'block' : 'none'}">
      <div id="ham-icon" :class="{open:(!navup)}">
        <span></span><span></span><span></span>
      </div>
    </div>

    <div class="nav-bar-links">
      <ul>
        <li class="nav-item" 
          @click="navup=true"
          :class="{'nav-item-up': navup,'nav-item-down': !navup}">
          <a href="#about" v-smooth-scroll>
          <router-link to="/#about"
            v-smooth-scroll
            @click="navup=!navup" 
            class="nav-link" 
            :style="{display: navLinks}">
            About
          </router-link></a>
        </li>
        <li class="nav-item" 
          :class="{'nav-item-up': navup,'nav-item-down': !navup}"
          @click="navup=true">
          <router-link to="/projects" 
            @click="navup=!navup"
            class="nav-link" active-class="active" 
            :style="{display: navLinks}"> 
            Projects
          </router-link>
        </li>
        <li class="nav-item" 
          @click="navup=true"
          :class="{'nav-item-up': navup,'nav-item-down': !navup}">
          <router-link to="/blog"
            v-smooth-scroll
            @click="navup=!navup" 
            class="nav-link" 
            :style="{display: navLinks}">
            Blog
          </router-link>
        </li>
        <li class="nav-item" 
          :class="{'nav-item-up': navup,'nav-item-down': !navup}"
          @click="navup=true">
          <a href="#contact" 
            v-smooth-scroll 
            @click="navup=!navup"
            class="nav-link" active-class="active" 
            :style="{display: navLinks}"> 
            Contact
          </a>
        </li>
      </ul>
    </div>

  </div>

</template>
<!--=================================================================================-->
<!--=====================================================================SCRIPTS=====-->
<!--=================================================================================-->
<script>
export default {
  name: "NavComponent",
  data() {
    return {
      windowWidth: 0,
      hamout: false,
      navup: true
    };
  },
  watch: {
    windowWidth() {
      if(this.windowWidth < 784){
        this.hamout = true;
      } else {
        this.hamout = false;
        this.navup = true;
      }
    }
  },
  computed: {
    navLinks() {
      if (!this.hamout) {
        return "inline-block";
      } else if (this.hamout && this.navup) {
        return "none";
      } else {
        return "block";
      }
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>
<!--=================================================================================-->
<!--=====================================================================STYLING=====-->
<!--=================================================================================-->
<style scoped>
.nav-bar {
  position: fixed;
  top: 0px;
  height: 55px;
  left: 0px;
  width: 100%;
  z-index: 3000;
  background-color: #323232;
  overflow: hidden !important;
  opacity: 0.9;
  margin: 0;
  -webkit-transition: height 0.2s ease; 
  transition: height 0.2s ease;}
/* ====================LOGO======= */
.Me {
  position: fixed;
  height: 40px;
  opacity: 0.85;
  width: auto;
  top: 8px;
  z-index: 4000;
  overflow: hidden;}
.ontop {opacity: 0;}
.ontop:hover {opacity: 1;}
.imageLeft{
  left: 15px;
  right: initial;}
.imageRight{
  left: initial;
  right: 15px;}
/* ====================HAMBURGER======= */
#hamburger {
  opacity: 0.8;
  position: fixed;
  z-index: 100;
  top: 13px;
  left: 15px;
  height: 30px;
  width: 45px;
  display: none;}
#ham-icon {
  margin: 0;
  top:0;
  left: 0;
  z-index: 10;
  padding: 0; 
  width: 45px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;}
#ham-icon span {
  display: block;
  position: absolute;
  height: 6px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 0.8;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;}
#ham-icon span:nth-child(1) {
  top: 0px;
  transform-origin: left center;}
#ham-icon span:nth-child(2) {
  top: 12px;
  transform-origin: left center;}
#ham-icon span:nth-child(3) {
  top: 24px;
  transform-origin: left center;}

#ham-icon.open span:nth-child(1) {
  transform: rotate(45deg);
  top: -3px;
  left: 8px;}
#ham-icon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;}
#ham-icon.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 30px;
  left: 8px;}
/* ====================LINKS======= */
.nav-bar-links{
  position: fixed;
  left: 0;
  top: 0;}
.nav-item-up {
  position: relative;
  display: inline-block;
  top: 11px;
  width: 85px;
  left: 60px;
  margin: 0;
  padding: 0;}
.nav-item-down {
  position: relative;
  display: block;
  text-align: left;
  top: 45px;
  left: -25px;
  width: 90px;
  margin: 10px;
  padding: 5px;}
.nav-link {
  display: inline-block;
  font-family: "Cabin", sans-serif;
  font-weight: 400;
  font-size: 22px;
  opacity: 0.75;
  color: #ffffff;
  text-decoration: none;
  margin: 0;
  padding: 0;
  /* margin-right: 20px;} */}
.nav-link:hover,
.nav-link.active {
  opacity: 1;  
  font-weight: 700;
  color: #4ea792;}
</style>