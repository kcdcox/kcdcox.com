<template>

  <div class="nav-bar" 
    v-on:mouseleave="navup=true" 
    :style="{height: (navup) ? '55px':'188px'}">

    <router-link to="/" v-if="hamout==false">
      <img src="../images/logo/kclogoWGP.png" class="Me">
      <img src="../images/logo/kclogoWPG.png" class="Me ontop">
    </router-link>

    <div id="hamburger" 
      :style="{display: (hamout) ? 'block' : 'none'}"
      v-on:click="navup = !navup">

      <svg xmlns="http://www.w3.org/2000/svg" id="ham" viewBox="0 0 500 500">
        <line x1="29" y1="32.8" x2="472"  y2="32.8" fill="none" stroke="#fff"
          stroke-linecap="round" stroke-miterlimit="10" stroke-width="49"
        ></line>
        <line x1="29"  y1="173"  x2="472" y2="173" fill="none" stroke="#fff"
          stroke-linecap="round" stroke-miterlimit="10" stroke-width="49"
        ></line>
        <line
          x1="29" y1="313.2" x2="472" y2="313.2" fill="none" stroke="#fff" 
          stroke-linecap="round" stroke-miterlimit="10" stroke-width="49"
        ></line>
      </svg>

    </div>

    <div class="nav-bar-links">
      <ul>
        <li class="nav-item" :class="{'nav-item-up': navup,'nav-item-down': !navup}">
          <router-link to="/#about" @click="navup=!navup" 
          class="nav-link" :style="{display: navLinks}">
            About
          </router-link>
        </li>
        <li class="nav-item" :class="{'nav-item-up': navup,'nav-item-down': !navup}">
          <router-link to="/work" @click="navup=!navup"
              class="nav-link" active-class="active" 
              :style="{display: navLinks}"> 
            Work
          </router-link>
        </li>
        <li class="nav-item" :class="{'nav-item-up': navup,'nav-item-down': !navup}">
          <router-link to="/contact" @click="navup=!navup"
              class="nav-link" active-class="active"
              :style="{display: navLinks}">
            Contact
          </router-link>
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
  transition: height 0.2s ease;
}
.Me,
#hamburger {
  position: fixed;
  height: 40px;
  opacity: 0.85;
  width: auto;
  left: 15px;
  top: 8px;
  z-index: 4000;
  overflow: hidden;
}
.ontop {
  opacity: 0;
}
.ontop:hover {
  opacity: 1;
}
#hamburger {
  position: fixed;
  top: 13px;
  height: 40px;
  width: 40px;
  display: none;
}
#ham {
  position: relative;
  top: 0;
  left: 0;
  opacity: 0.85;
  width: 40px;
  height: 40px;
}
.nav-bar-links{
  position: fixed;
  left: 0;
  top: 0;
}
.nav-item-up {
  position: relative;
  display: inline-block;
  top: 11px;
  left: 65px;
  width: 90px;
  margin: 0;
  padding: 0;
}
.nav-item-down {
  position: relative;
  display: block;
  text-align: left;
  top: 45px;
  left: -25px;
  width: 90px;
  margin: 10px;
  padding: 0;
}
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
}
.nav-link:hover,
.nav-link.active {
  opacity: 1;  
  font-weight: 700;
  color: #4ea792;
}
</style>