<template>
<b-container fluid id="footer">

  <b-row class="nav-panel">

    <b-col cols="10" offset="1" sm="6" offset-sm="3">
			<!--=================================================DARK-PANEL================-->
      <b-row class="dark-panel">

        <b-col cols="12" xl="4">
          <h1 class="wrkT1 white mont fw7">
            <span class="rsBr">Let's Build</span>
            <span class="rsBr"> Something!</span>
          </h1>
        </b-col>

        <b-col cols="12" xl="4">
          <a href="mailto:kcdcox@gmail.com?Subject=Hello"
            style="text-decoration:none !important; text-decoration:none;" target="_top">
            <h1 class="wrkT3 white mont fw6">
              Get in Touch
            </h1>
          </a>
        </b-col>

        <b-col cols="0" xl="4">
          <router-link to="/projects" class="nav-link">
            <h1 class="wrkT2 white mont fw7">
              See My<br>Portfolio
            </h1>
          </router-link>
        </b-col>

      </b-row>

    </b-col>
		<!--==================================================CIRCLE-ICONS================-->
		<b-row class="footIcons">

			<a href="#contact" v-smooth-scroll></a><div id="contact"></div>

			<div class="conIconCont">
				<div class="purpCircle">
					<a href="https://www.linkedin.com/in/kcdcox">
						<img src="../images/icons/contIconsG-03.png" class="ftIco">
						<img src="../images/icons/contIconsW-03.png" class="ftIco ontop">
					</a>
				</div>

				<div class="purpCircle">
					<a href="https://www.instagram.com/kcdcox/">
						<img src="../images/icons/contIconsG-04.png" class="ftIco">
						<img src="../images/icons/contIconsW-04.png" class="ftIco ontop">
					</a>
				</div>

				<div class="purpCircle">
					<a href="mailto:kcdcox@gmail.com?Subject=Hello" target="_top">
						<img src="../images/icons/contIconsG-05.png" class="ftIco">
						<img src="../images/icons/contIconsW-05.png" class="ftIco ontop">
					</a>
				</div>
			</div>
		
		</b-row>
		<!-- =================================================LOGO-DATE=============== -->
		<b-row class="logoBox">
			<img src="../images/logo/kclogoWBP.png" class="footLog">
			<h3 class="mont fw7 fs14p black copyR">
				Kevin Cox &#169; TwentyEighteen
			</h3>
		</b-row>

		<b-row id="googleMap">
				<GoogleMap name="map"></GoogleMap>
		</b-row>

  </b-row>

</b-container>
</template>
<!--=================================================================================-->
<!--=====================================================================SCRIPTS=====-->
<!--=================================================================================-->
<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import GoogleMap from "./GoogleMap";
Vue.use(BootstrapVue);

export default {
	name: 'FootComponent',
	components: { GoogleMap },
};
</script>
<!--=================================================================================-->
<!--=====================================================================STYLING=====-->
<!--=================================================================================-->
<style>
#footer{
  position:relative;
  height:450px;
  width: 100%;
	z-index: 10;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: visible !important; }
#googleMap{
	position: absolute;
	z-index: -2;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;}
.nav-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  overflow: visible !important;}
.dark-panel {
	height: auto;
	padding: 20px !important;
	margin: 0 auto;
	top: -40px !important;
	text-align: center;
	width: 100%;
	border-radius: 15px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
	background-color: #323232;}
.wrkT1, .wrkT2, .wrkT3 {
	position: relative;
	width: 100%;
	margin: 10px auto;
	text-align: center;
	font-size: 2rem;
	line-height: 2.5rem;}
.wrkT2:hover { color: #8961A0;}
.wrkT3 {
	border-radius: 25px;
	font-size: 17px;
	border: 3px solid #4EA792EF;
	transition: background-color 0.5s ease;
	background-color: none;
	line-height: 50px;}
.wrkT3:hover { background-color: #4EA792EF;}
.footIcons {
  left: 0;
  width: 100%;
  position: relative;
	top: -20px !important;
  height: 100px;
  padding: 0;
  margin: 0;}
.conIconCont {
	position: absolute;
	width: 380px;
	height: 100px;
	left: calc(50% - 190px);}
.purpCircle {
	position: relative;
	display: inline-block;
	width: 100px;
	height: 100px;
	margin-left: 10px;
	margin-right: 10px;
	top: 0;
	border-radius: 50px;
	border: 2px solid white;
	transition: background-color 0.5s ease;
	background-color: #8961A0;}
.purpCircle:hover { background-color: #4EA792;}
.ftIco {
	position: absolute;
	width: 40%;
	height: 100%;
	left: 30%;
	object-fit: contain;}
.logoBox {
  position: relative;
	top: -20px !important;
	width: 100%;
  left: 0;
  padding: 0;
  margin: 0;
	height: 130px;
	overflow: visible;}
.footLog {
	position: relative;
	object-fit: contain;
	width: 150px;
	margin: 0 auto;
	height: 80px;
	top: 20px;}
.copyR {
  font-size: 16px;
	text-align: center;
	position: relative;
	top: 15px;
	height: 20px;
	width: 100%;}
/*===================RESPONSIVENESS===================*/
/*================================================SM==*/	
@media screen and (max-width: 767px) {
	.wrkT2 { display: none;}
	.rsBr { display: inline;}
	.logo { height: 18vw;}
	.nav-item {
		display: block;
		top: 45px;
		left: -10px;
		width: 90px;
		margin-top: 15px;}
	.nav-link {
		font-family: 'Cabin', sans-serif;
		font-weight: 400;
		font-size: 22px;
		opacity: 0.75;
		color: #ffffff;
		text-decoration: none;}
	.navbar .nav-link:hover,
	.navbar .nav-link.active {
		opacity: 1;
		font-weight: 700;
		color: #4EA792;}
	.wrkT1, .wrkT2, .wrkT3 {
		font-size: 16px;
		line-height: 32px;}
	.conIconCont {
		width: 260px;
		height: 100px;
		left: calc(50% - 130px);}
	.purpCircle {
		width: 60px;
		height: 60px;
		margin-left: 10px;
		margin-right: 10px;}
}
/*================================================MD==*/
@media (min-width: 768px) and (max-width: 991px) {
	.wrkT2 { display: none;}
	.wrkT3 { width: 50%;}
	.rsBr { display: inline;}
	.nav-link { display: inline-block;}
	.wrkT2, .wrkT3 { font-size: 18px; line-height: 32px;}
}/*================================================LG==*/
@media (min-width: 992px) and (max-width: 1199px) {
	.wrkT2 {display: none;}
	.wrkT3 {width: 50%;}
	.rsBr {display: inline;}
}/*================================================XL==*/
@media (min-width: 1199px) {
	.rsBr {display: block;}
}
</style>
