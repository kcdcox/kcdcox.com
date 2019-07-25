<template>
<b-container fluid id="homeGrid">
  <!--=================================================SPECIALTY TAG=======-->
  <b-row class="turqBg" id="specialty">
		<a href="#about" v-smooth-scroll></a><div id="about"></div>
    <b-col cols="12" class="cntrTxt">
      <h1 class="cab white fw6 fs22vw" id="speTxt">
        Freelance Web Developer & Designer based out of British Columbia, Canada.
        <br class="speBr"> I specialize in the responsive design and 
        development of attractive, functional websites.
      </h1>
    </b-col>

  </b-row>
  <!--=================================================ABOUT ME & IMG======-->
  <b-row class="whiteBg" id="aboutRow">

    <b-col cols="12" sm="6" class="cntrTxt">
			
      <h1 class="mont drkGrey fw5 fs22 px-3" id="aboutme">
        Hi, I'm Kevin :) I'm a perpetually curious, critical thinker, 
        with a passion for design and development
      </h1>
    </b-col>

    <b-col cols="12" sm="6">
        <img src="../../images/artwork/Me.jpg" id="cartoonMe">
    </b-col>

  </b-row>
  <!--===================================================SKILLS============-->
  <b-row class="skills" id="dezdiz">
    <!--=================================================DESIGN============-->
    <b-col cols="10" offset="1" md="5" xl="4" offset-xl="2" 
			class="info whiteBg" id="left">

      <b-row class="logo">
        <img src="../../images/icons/siteIcons-01.png" id="dezLogo">
      </b-row>

      <b-row class="title">
        <h1 class="purp split cab cntrTxt fw6 fs30">
          Design
        </h1>
        <h3 class="drkGrey split mont cntrTxt mt-4 w85 fw4 fs14">
          I originally attended the Ontario College of Art & Design
          University (OCADU) in Toronto, for Graphic Design, where I refined
          my own aesthetic and learned design best practices.
        </h3>
        <h2 class="turq split cab cntrTxt mt-4 fw6 fs20">
          Services
        </h2>
        <h3 class="drkGrey mont split cntrTxt mt-4 w80 fw4 fs14">
          Web, UI, UX, Logos, Illustrations, Layouts & Graphics
        </h3>
        <h2 class="turq split cab cntrTxt mt-4 fw6 fs20">
          Design Tools
        </h2>
        <h3 class="drkGrey mont split cntrTxt mt-4 fw4 fs14">
          &#8226; Pencil & Paper<br>
          &#8226; Adobe Illustrator<br>
          &#8226; Adobe Photoshop<br>
          &#8226; Adobe InDesign<br>
          &#8226; Adobe Xd<br>
          &#8226; Bootstrap<br>
        </h3>
      </b-row>

    </b-col>
    <!--===============================================DEVELOPMENT=========-->
    <b-col cols="10" offset="1" offset-md="0" md="5" xl="4" 
			class="info whiteBg" id="right">

      <b-row class="logo">
        <img src="../../images/icons/siteIcons-02.png" id="devLogo">
      </b-row>

      <b-row class="title">
        <h1 class="purp split cab cntrTxt fw6 fs30">
          Development
        </h1>
        <h3 class="drkGrey mont split cntrTxt mt-4 w85 fw4 fs14">
          I graduated from Dalhousie University, In Halifax, 
					with a Double Major in Computer Science and Neuroscience, 
					which has given me the skills to solve problems and 
					build functional applications.
        </h3>
        <h2 class="turq split cab cntrTxt mt-4 fw6 fs20">
          Languages I Use
        </h2>
        <h3 class="drkGrey mont split cntrTxt mt-4 w80 fw4 fs14">
          HTML, CSS, JavaScript, JQuery, PHP, Java, C++, C & Python
        </h3>
        <h2 class="turq split cab cntrTxt mt-4 fw6 fs20">
          Development Tools
        </h2>
        <h3 class="drkGrey mont split cntrTxt mt-4 fw4 fs14">
          &#8226; Visual Studio Code<br>
          &#8226; Vue.js<br>
          &#8226; Node.js<br>
          &#8226; Express.js<br>
          &#8226; MongoDB<br>
          &#8226; SQL<br>
        </h3>
      </b-row>
			
    </b-col>
  </b-row>

	<b-row class="fill whiteBg" 
		:style="{height:(width<784)?infoH*2-0.5*height+'px':infoH-0.4*height+'px'}">
	</b-row>

	<b-row class="allWWork"  align-h="center" id="recent-work">

		<h1 class="cCat cab cntrTxt drkGrey fw7 my-5 py-5">Most Recent Work</h1>

		<b-col cols="10" lg="8" xl="7" class="card-col mb-5">
			<router-link :to="Projects[0].link">
				<project-card 
						:url="Projects[0].url"
						:title="Projects[0].title"
						:text="Projects[0].text">
				</project-card>
			</router-link>
		</b-col>
			
		<b-row class="underSlider"></b-row>

	</b-row>

</b-container>
</template>
<!--=================================================================================-->
<!--=====================================================================SCRIPTS=====-->
<!--=================================================================================-->
<script>
import ProjectCard from '../Projects/ProjectCard.vue';
import projez from '../Projects/Projects.json';

export default {
	name: "HomeGrid",
	components: { ProjectCard },
  data() {
    return{
			Projects: projez,
			width: window.innerWidth,
      height: window.innerHeight,
			infoH: '0',
			slickOptions: {
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


    }
	}, 
	created() {
		window.addEventListener("resize", this.handleResize);
		window.addEventListener('load', this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.infoH = document.getElementById('right').clientHeight + 50;
		}
	},
	mounted() {
		this.infoH = document.getElementById('right').clientHeight + 50;
	}
}
</script>
<!--=================================================================================-->
<!--=====================================================================STYLING=====-->
<!--=================================================================================-->
<style>
.homegrid{
  position: absolute;
  width: 100%;
  top: 100vh !important;
  height: auto;
  padding: 0;
	margin: 0;}
.ender{
	position: relative;
	height: 30px;}
/*========================================HOME GRID====*/
#homeGrid,.container-fluid,
.row,#specialty {
	position: relative;
	width: 100vw;
	max-width: 100%;
	top: 0;
	left: 0;
	right: 0;
	margin: 0;
	padding: 0;
	overflow: hidden;}
.fill{ position: relative;}
/*=============================MY-SPECIALTY==========*/
#specialty {height: 15vw;}
#speTxt { top: 5vw;}
#about {
	position: relative;
	top: -40px;}
.speBr {display: inline;}
/*=================================SHORT-BIO=========*/
#aboutRow {
	display: flex;
	height: 55vh;}
#aboutme {
	width: 85%;
	left: 10%;
	z-index: 20;
	top: 37%;}
#cartoonMe {
	position: relative;
	width: 45vh;
	height: auto;
	object-fit: contain;
	top: 4%;}
/*=====================================SKILLS & TOOLS==*/
.skills {
	height: 50vh;
	overflow: visible;
	background-color: #8D469E55}
.info {
	position: relative;
	top: 15vh;
	left: 0;
	z-index: 2;
	border: 1px solid #BCBCBC;
	height: auto;
	border-bottom: 0px;}
#left,
#right {
	height: auto;
	padding-bottom: 40px;}
#left {
	border-top-left-radius: 1vw;
	border-right: 0px;}
#right {
	border-top-right-radius: 1vw;}
.logo {
	height: 12vw;}
#dezLogo,
#devLogo {
	position: relative;
	object-fit: contain;
	top: 3vw;
	width: 8vw;
	height: 6vw;
	margin: 0 auto;}
#myTools1,
#myTools2 {
	display: none;}
.underSlider{
	height: 100px;
}
/*=====================================================*/
/*========================!!RESONSIVITY!!==============*/
/*=====================================================*/
/*================================================XS===*/
@media screen and (max-width: 450px) {}
/*=================================================SM==*/
@media screen and (max-width: 767px) {
	#aboutme {font-size: 1.6rem !important;}
	h1.split {font-size: +5vw;}
	h2.split {font-size: +4vw;}
	h3.split {font-size: +2vw;}
	.logo {height: 18vw;}
	.logoBox {top: 20px;}
	#dezLogo, #devLogo { width: 13vw; height: 13vw;}
	#myTools1, #myTools2 {display: block !important;}
	/* #cartoonMe { left: calc(50vw - (45vh/2));} */
	#left, #right {
		border: 1px solid #BCBCBC;
		height: auto;
		border-top-left-radius: 2vw;
		border-top-right-radius: 2vw;}
	#right {
		border: 1px solid #BCBCBC;
		border-top-left-radius: 0vw;
		border-top-right-radius: 0vw;
		border-bottom-left-radius: 2vw;
		border-bottom-right-radius: 2vw;
		border-top: 0vw;}
	#speTxt { font-size: 1.3rem !important;}
	#specialty { height: 90px;}
	.speBr { display: none;}
}
</style>

