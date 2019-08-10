<template>
  <div class="first-look">
		
    <!--======================================================FOREST IMAGE=======-->
    <div class="firstlook">
      <img
        src="../../images/backgrounds/forest-me.jpg"
        :style="{ height: forestH +'px', 
                  width: forestW +'px', 
                  left: forestL +'px',
                  top: forestT + 'px'}"
        id="forMe"
      >
    </div>
    <!--======================================================TAGLINES===========-->
    <div class="tagline" :style="{top: tagTop + 'px'}">
      <img src="../../images/labels/labelz-01.png" id="kevinCox" alt="Kevin Cox">
      <img src="../../images/labels/labelz-02.png" id="webDeveloper" alt="Developer">
    </div>
    <!--======================================================STAR IMAGE=======-->
    <div class="starBg" :style="{top: starsT + 'px'}">
      <img src="../../images/backgrounds/1.jpg" 
			:style="{ height: starsH +'px', 
                width: starsW +'px', 
                left: starsL +'px'}"
			id="purpStarz">
    </div>
    <!--====================================================BUBBLE-SCROLL======-->
    <div class="bubbles" v-if="width>900">
      <a href="#top">
        <div class="bubble b1" title="Top" 
					:style="{backgroundColor:(this.toBottom<0.25)?'#8961A0':'#BCBCBC99'}">
				</div>
      </a>
      <a href="#about">
        <div class="bubble b2" title="About Me"
				:style="{backgroundColor:(this.toBottom>=0.25&&
					this.toBottom<0.5)?'#8961A0':'#BCBCBC99'}">
				</div>
      </a>
      <a href="#dezdiz">
        <div class="bubble b3" title="Design & Development"
					:style="{backgroundColor:(this.toBottom>=0.5&&
						this.toBottom<0.7)?'#8961A0':'#BCBCBC99'}">
				</div>
      </a>
      <a href="#recent-work">
        <div class="bubble b4" title="Design & Development"
					:style="{backgroundColor:(this.toBottom>=0.7&&
						this.toBottom<0.9)?'#8961A0':'#BCBCBC99'}">
				</div>
      </a>
      <a href="#footer">
        <div class="bubble b5" title="Bottom"
					:style="{backgroundColor:(this.toBottom>=0.9)?'#8961A0':'#BCBCBC99'}">
				</div>
      </a>
    </div>
    <!--======================================================SCROLL-ARROW=======-->
    <div class="scrlArrowz">
      <img src="../../images/icons/dwnArrow-07.png" class="scrlAr" id="scrD1">
      <img src="../../images/icons/dwnArrow-07.png" class="scrlAr" id="scrD2">
      <img src="../../images/icons/dwnArrow-07.png" class="scrlAr" id="scrD3">
    </div>
    <div class="scrollWord">
      <h1 class="scrolley white cntrTxt cab fw7">SCROLL DOWN</h1>
    </div>
  </div>
</template>
<!--=================================================================================-->
<!--=====================================================================SCRIPTS=====-->
<!--=================================================================================-->
<script>
export default {
  name: "FirstLook",
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
			docH: document.body.scrollHeight,
			toBottom: 0,
      fromTop: 0,
      forestH: 0,
      forestW: 0,
      forestL: 0,
      forestT: 0,
      starsH: 0,
      starsW: 0,
      starsL: 0,
      starsT: 0,
      tagTop: 0
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.onScroll);
    this.handleResize();
    this.onScroll();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.fromTop = window.scrollY;
			this.toBottom = (this.fromTop)/(this.docH*3);
      this.forestH = Math.max(0.644 * this.width, this.height);
      this.forestW = Math.max(1.553 * this.height, this.width);
      this.forestL = (this.width - Math.max(this.height * 1.5529, this.width)) / 2;
      this.starsH = Math.max(0.564 * this.width, this.height);
      this.starsW = Math.max(1.775 * this.height, this.width);
      this.starsL = (this.width - Math.max(this.height * 1.775, this.width)) / 2;
    },
    onScroll() {
			this.fromTop = window.scrollY;
			this.toBottom = (this.fromTop)/(this.docH*3);
      this.tagTop = this.fromTop * -0.36;
      this.forestT = this.fromTop * -0.29;
      this.starsT = this.fromTop * -0.8;
    }
  }
};
</script>
<!--=================================================================================-->
<!--=====================================================================STYLING=====-->
<!--=================================================================================-->
<style>
.first-look {
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
}
/*==============================FOREST-IMAGE & TAG=====*/
.firstlook,
.tagline {
  position: fixed;
  z-index: -10;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.tagline {left: 0px;}
#forMe {
  z-index: -4;
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
}
#kevinCox,
#webDeveloper {
  position: absolute;
}
#kevinCox {
  opacity: 0.75;
}
#webDeveloper {
  opacity: 0.85;
}
/*======================================STAR-IMAGE=====*/
.starBg {
  position: fixed;
  width: 100vw;
	height: 100vh;
}
#purpStarz {
  position: absolute;
	object-fit: fill;
  top: calc(100vh + 15vw + 10px); 
  width: 100%;
  height: auto;
  margin: 0;
}
/*======================================SCROLLING====*/
.bubbles {
  position: fixed;
  display: block;
  z-index: 30;
  height: 60vh;
  width: 20px;
  top: 26vh;
	left: 93vw;
}
.bubble {
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  background: #bcbcbc99;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border: 3.5px solid white;
}
.b1 {top: 0;}
.b2 {top: 20%;}
.b3 {top: 40%;}
.b4 {top: 60%;}
.b5 {top: 80%;}

.scrlArrowz {
  position: absolute;
  height: 100px;
  width: 60px;
  left: calc(50% - 30px);
  bottom: 25px;
  z-index: 40;
}
.scrlAr {
  position: absolute;
  width: 60px;
  height: 60px;
  opacity: 0;
  object-fit: contain;
  -webkit-animation: mymove1 3s ease infinite;
  animation: mymove1 3s ease infinite;
}
.scrollWord {
  position: absolute;
  height: 33px;
  width: 100%;
  left: 0;
  z-index: 10;
  bottom: 0;
}
.scrolley {
  opacity: 0.5;
  -webkit-animation: mymove2 1s ease infinite;
  animation: mymove2 1s ease infinite;
  -webkit-animation-delay: 1s;
	animation-delay: 1s;
	font-size: 14px;
}
#scrD2 {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
#scrD3 {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
@keyframes mymove1 {
  0% {top: -30px;left: 23px;width: 14px;opacity: 0;}
  33% {top: 23px;left: 5px; width: 50px;opacity: 0.45;}
  66% {top: 40px; left: 5px; width: 50px;opacity: 0.45;}
  100% {top: 65px;left: 23px; width: 14px;opacity: 0;}
}
@keyframes mymove2 {
  0% {opacity: 0.3;}
  50% {opacity: 0.7;}
  100% { opacity: 0.3;}
}
#top {
  position: absolute;
  top: 0;
}
/*========================!!ASPECT-RATIO!!============*/
/*----------Width < (0.625 * Height)----------*/
@media only screen and (max-aspect-ratio: 5/8) {
	#kevinCox {
		top: 59vh;
		width: 45vw;
		left: 27.5vw;
	}
	#webDeveloper {
		top: 64vh;
		width: 40vw;
		left: 30vw;
	}
}
/*----------Width > (0.625 * Height)----------*/
@media only screen and (min-aspect-ratio: 5/8) {
	#kevinCox {
		top: 59vh;
		width: 40vw;
		left: 30vw;
	}
	#webDeveloper {
		top: 65vh;
		width: 34vw;
		left: 33vw;
	}
}
/*----------Width > (0.9 * Height)----------*/
@media only screen and (min-aspect-ratio: 9/10) {
	#kevinCox {top: 59vh;}
	#webDeveloper {
		top: 68vh;
	}
}
/*---------Width > (1.333 * Height)----------*/
/*---------------CENTERED---------------------*/
@media only screen and (min-aspect-ratio: 4/3) {
	#kevinCox {
		top: 59vh;
		width: 35vw;
		left: 32.5vw;
	}
	#webDeveloper {
		top: 69vh;
		width: 30vw;
		left: 35vw;
	}
}
/*---------Width > (1.6 * Height)-------------*/
/*------------------OFF-CENTER-----------------*/
@media only screen and (min-aspect-ratio: 8/5) {
	#kevinCox {
		top: 42vh;
		width: 20vw;
		left: 27vw;
	}
	#webDeveloper {
		top: 57vh;
		width: 19vw;
		left: 55vw;
	}
}

/*-----------Width > (2 * Height)-------------*/
@media only screen and (min-aspect-ratio: 2/1) {
	#kevinCox {
		top: 50vh;
	}
	#webDeveloper {
		top: 65vh;
	}
}
</style>

