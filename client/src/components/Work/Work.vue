<template>
<b-container fluid id="work">
  <!--=====================================SINGLE-PAGE-VIEW================-->
  <div class="singleArt">
    <img src="../../images/icons/X-09-09.svg" class="Xicon">
    <div class="singleArtCont">
      <img class="currArtDisp" title="">
    </div>
  </div>

  <!--=====================================TOGGLE-ART-BAR==================-->
  <!-- <b-row id="togglez">

    <b-col class="riTxt">
      <h1 class="rale drkGrey fw7 fs26">Design</h1>
      <div class="diviBorderR"></div>
      <h1 class="btnz" id="iconB" @click=" ">Icons</h1>
      <h1 class="btnz" id="illoB">Illustrations</h1>
      <h1 class="btnz on" id="allBtn">All</h1>
    </b-col>

    <b-col class="lfTxt">
      <h1 class="rale drkGrey fw7 fs26">Development</h1>
      <div class="diviBorderL"></div>
      <h1 class="btnz on">More</h1>
      <h1 class="btnz">Coming</h1>
      <h1 class="btnz">Soon</h1>
    </b-col>

  </b-row> -->
  <!--===============================================================ALL-WORK-->
  <b-row class="allWork">

    <b-col cols="10" offset="1">
      <!--========================================================DEVELOPMENT-->
      <b-row class="labels">
        <h1 class="bCat rale drkGrey fw7 my-4">Development</h1>
      </b-row>
       <!--=========================================================DEV-CARDS-->
      <b-row align-h="center">

        <b-col cols="12" lg="6" class="card-col mb-5">
          <router-link to="/findwords">
            <div class="card-div ">
              <img class="card-image" src="../../images/backgrounds/findwords-card.jpg">
              <div class="card-text-div py-0 px-3">
                <h2 class="card-heading mt-3 mb-2 fs18 rale fw6">Scrabble Word Finder</h2>
                <p class="card-text fs14 mont fw4">
                  This application recieves letters as input, searches the dictionary, and returns all words matching the given input. Filtering and sorting functionality is included. The front-end is built with Vue.js, while the back-end is built using Node.js and Express.js.
                </p>
              </div>
            </div>
          </router-link>
        </b-col>

        <b-col cols="12" lg="6" class="card-col mb-5">
          <router-link to="/">
            <div class="card-div">
              <img class="card-image" src="../../images/backgrounds/kcdcox-card.jpg">
              <div class="card-text-div py-0 px-3">
                <h2 class="card-heading mt-3 mb-2 fs18 rale fw6">www.kcdcox.com</h2>
                <p class="card-text fs14 mont fw4">
                  This website acts as my my portfolio and reference--for freelance work. The front-end is built with HTML, CSS, Javascript Bootstrap, and Vue.js, while the back-end is connected via Node.js and Express.js.
                </p>
              </div>
            </div>
          </router-link>
        </b-col>


      </b-row>
      <!--===========================================================DESIGN-->
      <b-row class="labels">
        <h1 class="bCat rale drkGrey fw7 mt-4">Design</h1>
      </b-row>
      <!--====================================================CAMPING-ICONS-->
      <b-row class="labels icon">
        <h1 class="cat lfTxt rale turq fs30 fw6 mt-4">
          Icons
        </h1>
        <h1 class="cat riTxt rale purp fs24 fw6 mt-4">
          Camping Set
        </h1>
      </b-row>

      <b-row class="carousel icon">
        <section class="iconSlider icon">
          <slick ref="slick" :options="slickOptionsIcon">
            <div><img class="wGI" src="../../images/icons/backpack-icon.jpg"></div>
            <div><img class="wGI" src="../../images/icons/hatchet-icon.jpg"></div>
            <div><img class="wGI" src="../../images/icons/tent-icon.jpg"></div>
            <div><img class="wGI" src="../../images/icons/flashlight-icon.jpg"></div>
            <div><img class="wGI" src="../../images/icons/waterbottle-icon.jpg"></div>
            <div><img class="wGI" src="../../images/icons/knife-icon.jpg"></div>
          </slick>
        </section>
      </b-row>
      <!--===================================================ILLUSTRATIONS-->
      <b-row class="labels illo">
        <h1 class="cat lfTxt rale turq fs30 fw6 mt-4">
          Illustrations
        </h1>
        <h1 class="cat riTxt rale purp fs24 fw6 mt-4">
          Adobe Illustrator
        </h1>
      </b-row>

      <b-row class="carousel illo">
        <section class="illustratSlider icon">
          <slick ref="slick" :options="slickOptionsIllustration">
            <div><img class="wGI" src="../../images/600ill/life-after-death.jpg"></div>
            <div><img class="wGI" src="../../images/600ill/gondola.jpg"></div>
            <div><img class="wGI" src="../../images/600ill/haida-bunny.jpg"></div>
            <div><img class="wGI" src="../../images/600ill/deer-bike.jpg"></div>
            <div><img class="wGI" src="../../images/600ill/haida-giraff.jpg"></div>
            <div><img class="wGI" src="../../images/600ill/dmb.jpg"></div>
          </slick>
        </section>
      </b-row>
      <!--=========================================================DRAWINGS-->
      <b-row class="labels illo">
        <h1 class="cat lfTxt rale turq fs30 fw6 mt-4">
          Illustrations
        </h1>
        <h1 class="cat riTxt rale purp fs24 fw6 mt-4">
          Drawings
        </h1>
      </b-row>

      <b-row class="carousel illo">
        <section class="illustratSlider icon">
          <slick ref="slick" :options="slickOptionsIllustration">
            <div><img class="wGI" src="../../images/600ink/blue-whale.jpg"></div>
            <div><img class="wGI" src="../../images/600ink/xmas.jpg"></div>
            <div><img class="wGI" src="../../images/600ink/explore.jpg"></div>
            <div><img class="wGI" src="../../images/600ink/flow.jpg"></div>
            <div><img class="wGI" src="../../images/600ink/adhd.jpg"></div>
            <div><img class="wGI" src="../../images/600ink/chinook.jpg"></div>
            <div><img class="wGI" src="../../images/600ink/balloon.jpg"></div>
            <div><img class="wGI" src="../../images/600ink/zeke.jpg"></div>
            <div><img class="wGI" src="../../images/600ink/otter.jpg"></div>
          </slick>
        </section>
      </b-row>
      <!--=========================================================SPACER======-->
      <b-row class="spaceX"></b-row>

    </b-col>

  </b-row>
</b-container>
</template>
<!--=============================================================================-->
<!--=================================================================SCRIPTS=====-->
<!--=============================================================================-->
<script>
import Slick from 'vue-slick';

export default {
  name: "WorkGrid",
  components: { Slick },
  data() {
    return{
			width: window.innerWidth,
      height: window.innerHeight,
			infoH: '0',
			slickOptionsIcon: {
				swipe: true,
				touchMove: true,
				swipeToSLide: true,
				autoplay: true,
				autoplaySpeed: 2000,
				dots: true,
				arrows: true,
				focusOnSelect: true,
				pauseOnHover: true,
				centerMode: true,
				centerPadding: '50px',
				slidesToShow: 5,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							centerMode: true,
							centerPadding: '40px',
							slidesToShow: 4
						}
					},
					{
						breakpoint: 480,
						settings: {
							centerMode: true,
							arrows: false,
							dots: false,
							centerPadding: '25px',
							slidesToShow: 3
						}
					}
				]
      },
      slickOptionsIllustration: {
        swipe: true,
        touchMove: true,
        swipeToSLide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        pauseOnHover: true,
        centerPadding: '50px',
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              arrows: false,
              dots: false,
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
        ]
      }
    }
  }, 
  methods: {

  }
}
</script>
<!--===============================================================================-->
<!--===================================================================STYLING=====-->
<!--===============================================================================-->
<style>
#work{
	top: calc( 55px + 3vh);
	left: 0;
	right: 0;
	width: 100%;
	height: auto;
	margin: 0;
	padding: 0;
	overflow: visible !important;}
.allWork{overflow: visible !important;}
.labels{overflow: visible;}
.spaceX{height: 20vh;}
#togglez{ overflow: visible !important;}
.card-div{
  position: relative;
  margin: 0;
  height: 55vh;
  min-height: 330px;
  padding: 0;
  width: 100%;
  background:#323232;
  border-radius: 2vh !important;
  border: 1px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden !important;
}
.card-div:hover{ box-shadow: 0 4px 8px 0 #8A648CFF;}
.card-image{
  position: relative;
  width: 100%;
  height: auto;}
.card-text-div{
  position: absolute;
  overflow: hidden;
  width: 100%;
  top: 60%;
  left: 0;
  background:#323232;
  height: 41%;
  }
.card-heading{color: #4EA792 !important;}
.card-text{color: white !important;}
/*===========================DIVIDERS==*/
.diviBorderR,
.diviBorderL{
	position: absolute;
	width: 60%;
	height: calc(100% + 6px);
	top: 4px;
	border-bottom: 4px solid #4EA792;}
.diviBorderR{
	right: 0px;}
.diviBorderL{
	left: -2px;
	border-left: 4px solid #4EA792;}
/*==================================BUTTONS===*/
.btnz{
	position: relative;
	display: inline-block;
	background-color: #fff;
  border: none;
	font-family: 'Raleway', sans-serif;
	font-weight: 500;
	font-size: 16px;
  color: grey;
	width: auto;
  padding: 2px 10px;
	margin: 1px;
	margin-top: 7px;
  text-align: center;
	border-radius: 4px;
  text-decoration: none;
  display: inline-block;}
.btnz:hover{
	background-color: #4EA792EF;
  color: white;}
.btnz:active{
	background-color: #8961A0 !important;
	color: white;}
.on{
	background-color: #8961A0 !important;
  color: white;}
.bCat{
  left: -20px;
}
/*=============================FOCUSES-IMAGE=================*/
.Xicon{
	position: relative;
	top: 20px;
	display: none;
	left: calc(100vw - 80px);
	height: 40px;
  width: 40px;
  transition: transform .2s ease-out;}
.Xicon:hover{
	transform: scale(1.3);}
.singleArt{
	position: fixed;
	display: none;
	height:calc(100vh - 55px);
	width: 100vw;
	left: 0px;
	top:55px;
	z-index:2000;
	background-color: #727277AA;}
.singleArtCont{
	position: relative;
	top: 60px;
	left: 80px;
	width: calc(100vw - 160px);
	height: calc(100vh - 200px);
	overflow: hidden;}
.currArtDisp{
	width: 100%;
	height: 100%;
	margin: 0 auto;
	object-fit: contain;}
</style>
