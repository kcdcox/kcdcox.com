<template>
<b-container fluid id="contact">
  <GoogleMap  name="example"></GoogleMap>

  <div class="cntrF">
    <div class="contactFormz">

      <p class="hello cab fw5 white">SAY HELLO</p>
      <div class="contact-form">
        <form method="post">
          <input class="form-control" type="email" name="email" placeholder="Your Email*" required>
          <input  class="form-control" type="text" name="subject" placeholder="Subject" >
          <textarea class="form-control"  name="message"  placeholder="Message*" rows="3" required></textarea><br>
          <button type="submit" class="submit" @click="sendEmail">SEND MESSAGE</button>
        </form>
      </div>

    </div>
  </div>

</b-container>
</template>
<!--=================================================================================-->
<!--=====================================================================SCRIPTS=====-->
<!--=================================================================================-->
<script>
import GoogleMap from "../GoogleMap";
import WordService from "../../WordService";

export default {
  name: "ContactGrid",
  components: { GoogleMap },
  data() {
    return {
      message: [
        { from: ""},
        { to: "kcdcox@kcdcox.com"},
        { subject: ""},
        { text: ""}
      ]
    };
  },
  methods: {
    async sendEmail() {
      await WordService.sendEmail(this.message);
    }
  },
  async created() {
    try {
      await WordService.sendEmail();
    } catch (err) {
      this.error = err.message;
    }
  }
}
</script>
<!--=================================================================================-->
<!--=====================================================================STYLING=====-->
<!--=================================================================================-->
<style scoped>
.contact{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
/*=================================GOOGLE-MAP========*/
#map {
  position: relative;
  top: 55px;
  left: 0;
  z-index: 1;
  height: calc(100% - 55px);
  width: 100%;}
/*===============================CONTACT-FORM========*/
#contactGrid{
  position: absolute;
	width: 100vw;
	max-width:100%;
	top: 100%;
	left: 0;
	margin: 0;
	padding: 0;
  z-index: 30;
  overflow: visible !important;}
.cntrF{
  position: absolute;
  left: 0;
  width: 100%;
  top: 22vh;
  height: auto;}
.contactFormz{
  position: relative;
  top: 0;
  height: auto;
  padding-bottom: 20px;
  width: 65vw;
  max-width: 800px;
  margin: 0 auto;
  z-index: 200;
  border-radius: 20px;
  border: 3px solid transparent;
  background-color: #323232DD;}
.hello{
	position:relative;
  font-size: 24px;
	width: 100%;
	padding: 0;
	margin: 0;
  margin-bottom: 30px;
  top: 20px;
  font-size: 24px;
	text-align: center;}
.contact-form{
	position: relative;
	display: block;
	width: 80%;
	left: 10%;}
.form-control{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
	font-weight: 400;
	position: relative;
	width: 100%;
	line-height: 1.4;
	display: block;
	background: #ffffff22;
	border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
	outline: none;
	border-bottom: 3px solid #4EA792;
	color: #fff;
	margin: 0px;
  margin-top: 30px;}
form .submit{
  font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 17px;
	position: relative;
	color: #fff;
	width: 200px;
  margin: 10px auto;
  padding: 5px 5px 5px 5px;
  height: auto;
	display: block;
	border: 3px solid #8961A0;
  transition: background-color 0.5s ease;
  border-radius: 20px;
	background-color: transparent;}
form .submit:hover{
  background: #8961A0;
  color: white;}
/*================================================XS===*/
@media screen and (max-width: 400px) {
.contactFormz{width: 80vw;}
.form-control{
  font-size: 14px;
	line-height: 1.2;
  margin-top: 20px;}
}
</style>
