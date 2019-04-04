<template>
  <div id="app">
    <NavComponent/>
    <router-view></router-view>
    <FootComponent/>
  </div>
</template>
<!--=================================================================================-->
<!--=====================================================================SCRIPTS=====-->
<!--=================================================================================-->
<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)
Vue.use(BootstrapVue);

import NavComponent from './components/NavComponent.vue'
import FootComponent from './components/FootComponent.vue'

export default {
  name: 'app',
  components: {
    NavComponent,
    FootComponent
  }
}
</script>
<!--=================================================================================-->
<!--=====================================================================STYLING=====-->
<!--=================================================================================-->
<style>
@import url("https://fonts.googleapis.com/css?family=BenchNine:300|Cabin:400,700|Quicksand:500,700|Lato:300,400,400italic,600,700|Roboto:400,500,700|Montserrat:100,200,400|Nunito:400,600,700|Raleway:300,400,500,600,700");
html{ 
  font-size: 62.5%;
  overflow: scroll;
  overflow-x: hidden;}
::-webkit-scrollbar {
  width: 0px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
	width: 100%;
	margin: 0;
	padding: 0;}
/*========================POSITIONING=======*/
.ontop { opacity: 0;}
.ontop:hover { opacity: 1;}
.zero-position{
	margin: 0;
	padding: 0;
	top: 0;
	left: 0;}
/*========================FONTS=============*/
.cab {
	font-family: 'Cabin', sans-serif;
	font-weight: 400;}
.rale {
	font-family: 'Raleway', sans-serif;
	font-weight: 300;}
.lato {
	font-family: 'Lato', sans-serif;
	font-weight: 300;}
.mont {
	font-family: 'Montserrat', sans-serif;
	font-weight: 200;}
/*========================COLOURS==========*/
.turq {color: #4EA792 !important;}
.purp {color: #8961A0 !important;}
.white {color: #fff;}
.drkGrey {color: #323232CC;}
.grey {color: grey;}
.lightGrey {color: #BCBCBC;}
.black {color: 000;}
.turqBg { background-color: #4EA792EF;}
.purpBg { background-color: #8A648C;}
.whiteBg { background-color: white;}
.drkGreyBg { background-color: #323232;}
.blackBg { background-color: #000;} 
/*========================HEADINGS==========*/
h1, h2, h3, h4 {
	position: relative;
	display: block;
	width: 100%;
	padding: 0;
	margin: 0;}
/*========================WIDTHS==========*/
.w80 {width: 80%;}
.w85 {width: 85%;}
/*====================================FONT-WEIGHTS====*/
.fw3 {font-weight: 300 !important;}
.fw4 {font-weight: 400 !important;}
.fw5 {font-weight: 500 !important;}
.fw6 {font-weight: 600 !important;}
.fw7 {font-weight: 700 !important;}
.fw8 {font-weight: 800 !important;}
.fw9 {font-weight: 900 !important;}
/*====================================FONT-ALIGNMENT===*/
.cntrTxt { margin: 0 auto; text-align: center;}
.lfTxt { text-align: left;}
.riTxt { text-align: right;}
/*========================FONT-SIZE==========*/
.fs12{font-size: 1.2rem !important;}
.fs14{font-size: 1.4rem !important;}
.fs16{font-size: 1.6rem !important;}
.fs18{font-size: 1.8rem !important;}
.fs20{font-size: 2.0rem !important;}
.fs22{font-size: 2.2rem !important;}
.fs24{font-size: 2.4rem !important;}
.fs26{font-size: 2.6rem !important;}
.fs28{font-size: 2.8rem !important;}
.fs30{font-size: 3.0rem !important;}
/*========================FONT-SIZE==========*/
.fs12vw{font-size: 1.2vw !important;}
.fs14vw{font-size: 1.4vw !important;}
.fs16vw{font-size: 1.6vw !important;}
.fs18vw{font-size: 1.8vw !important;}
.fs20vw{font-size: 2.0vw !important;}
.fs22vw{font-size: 2.2vw !important;}
.fs24vw{font-size: 2.4vw !important;}
.fs26vw{font-size: 2.6vw !important;}
.fs28vw{font-size: 2.8vw !important;}
.fs30vw{font-size: 3.0vw !important;}
/*=================================================XS==*/
@media screen and (max-width: 450px) {
  .fsXS12{font-size: 1.2rem !important;}
  .fsXS14{font-size: 1.4rem !important;}
  .fsXS16{font-size: 1.6rem !important;}
  .fsXS18{font-size: 1.8rem !important;}
  .fsXS20{font-size: 2.0rem !important;}
  .fsXS22{font-size: 2.2rem !important;}
  .fsXS24{font-size: 2.4rem !important;}
  .fsXS26{font-size: 2.6rem !important;}
  .fsXS28{font-size: 2.8rem !important;}
  .fsXS30{font-size: 3.0rem !important;}}
/*=================================================SM==*/
@media screen and (max-width: 767px) {
  .fsSM12{font-size: 1.2rem !important;}
  .fsSM14{font-size: 1.4rem !important;}
  .fsSM16{font-size: 1.6rem !important;}
  .fsSM18{font-size: 1.8rem !important;}
  .fsSM20{font-size: 2.0rem !important;}
  .fsSM22{font-size: 2.2rem !important;}
  .fsSM24{font-size: 2.4rem !important;}
  .fsSM26{font-size: 2.6rem !important;}
  .fsSM28{font-size: 2.8rem !important;}
  .fsSM30{font-size: 3.0rem !important;}}
/*================================================MD==*/
@media (min-width: 768px) and (max-width: 991px) {
  .fsMD12{font-size: 1.2rem !important;}
  .fsMD14{font-size: 1.4rem !important;}
  .fsMD16{font-size: 1.6rem !important;}
  .fsMD18{font-size: 1.8rem !important;}
  .fsMD20{font-size: 2.0rem !important;}
  .fsMD22{font-size: 2.2rem !important;}
  .fsMD24{font-size: 2.4rem !important;}
  .fsMD26{font-size: 2.6rem !important;}
  .fsMD28{font-size: 2.8rem !important;}
  .fsMD30{font-size: 3.0rem !important;}}
/*================================================LG==*/
@media (min-width: 992px) and (max-width: 1199px) {
  .fsLG12{font-size: 1.2rem !important;}
  .fsLG14{font-size: 1.4rem !important;}
  .fsLG16{font-size: 1.6rem !important;}
  .fsLG18{font-size: 1.8rem !important;}
  .fsLG20{font-size: 2.0rem !important;}
  .fsLG22{font-size: 2.2rem !important;}
  .fsLG24{font-size: 2.4rem !important;}
  .fsLG26{font-size: 2.6rem !important;}
  .fsLG28{font-size: 2.8rem !important;}
  .fsLG30{font-size: 3.0rem !important;}}
/*================================================XL==*/
@media (min-width: 1199px) {
  .fsXL12{font-size: 1.2rem !important;}
  .fsXL14{font-size: 1.4rem !important;}
  .fsXL16{font-size: 1.6rem !important;}
  .fsXL18{font-size: 1.8rem !important;}
  .fsXL20{font-size: 2.0rem !important;}
  .fsXL22{font-size: 2.2rem !important;}
  .fsXL24{font-size: 2.4rem !important;}
  .fsXL26{font-size: 2.6rem !important;}
  .fsXL28{font-size: 2.8rem !important;}
  .fsXL30{font-size: 3.0rem !important;}}
/*===============================CAROUSEL===========*/
.allWWork {
  width: 100%;
  position: relative;
	overflow: visible !important;
	background-color: white;
	height: auto;
	top: 0;}
.carousel {
	position: relative;
  width: 100%;
	top: 10px;
	left: 0;
	right: 0;
	margin: 0 auto;
	padding: 0;
	display: inline-block !important;
	height: auto;
	overflow: visible !important;}
.iconSlider{
  width: 100%;}
.slick-slide {
	text-align: center;
	color: #419be0;
	padding: 1vw;
	margin: 5px;
	background: #BCBCBC77;
	overflow: visible !important;}
.wGI {
	width: 100%;
	height: 100%;
	transition: transform .3s ease-out;
	object-fit: contain;}
.labels{
	overflow: visible;
	width: 100%;
	padding-bottom: 10px;}
.bCat {
	text-align: left;
	font-size: 5rem;
	margin-top: 4rem;}
.cCat {
	font-size: 2.5rem;
	left: 0px;
	margin-top: 12vh;}
.cat {
	width: 50% ;
	display: inline;
	font-size: 3rem;
  line-height: 3rem;}
/*=====================CAROUSEL-RESPONSIVITY==========SM==*/
@media screen and (max-width: 767px) {
	.riTxt.cat { font-size: 1.2rem !important;}
	.lfTxt.cat { font-size: 1.8rem !important;}
	.cat { line-height: 1.8rem;}}
/*=========================================================*/
</style>
