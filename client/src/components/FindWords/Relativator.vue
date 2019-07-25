<template>
<b-container fluid class="word-container lato purpBg">
<!--=================================================================FIND-WORDS===-->
<b-row class="mt-5 pt-5 pb-0" align-h="center">

  <h1 class="my-5 white fs30">Relativator</h1>

  <b-col cols="3">
    <b-form-input
      class="fs16"
      placeholder="Enter letters..."
      type="text"
      v-on:keyup.enter="relativator"
      v-model="letters1"/>

      <!-- <p class="fs18 white" v-if="(letters1.length==0)">Enter the first word.</p>
      <p class="fs18 white" v-else>
        {{checkChars1.slice(0,checkChars1.length - 1)}} and
        {{parseInt(checkChars1.slice(checkChars1.length-1, checkChars1.length))}}
        blank<span 
        v-if="parseInt(checkChars1.slice(checkChars1.length-1, checkChars1.length))!=1">s</span>.
      </p> -->
  </b-col>

  <b-col cols="3">
    <b-form-input
      class="fs16"
      placeholder="Enter letters..."
      type="text"
      v-on:keyup.enter="relativator"
      v-model="letters2"/>

      <!-- <p class="fs18 white" v-if="(letters2.length==0)">Enter the second.</p>
      <p class="fs18 white" v-else>
        {{checkChars2.slice(0,checkChars2.length - 1)}} and
        {{parseInt(checkChars2.slice(checkChars2.length-1, checkChars2.length))}}
        blank<span 
        v-if="parseInt(checkChars2.slice(checkChars2.length-1, checkChars2.length))!=1">s</span>.
      </p> -->
  </b-col>

  <b-col cols="3">
    <b-button 
      class="fs16 " 
      v-on:click="relativator">Get Relation
    </b-button>
  </b-col>

  <b-row>
    <p>{{relation.data}}</p>
  </b-row>

</b-row>
</b-container>
</template>
<!--=================================================================================-->
<!--=====================================================================SCRIPTS=====-->
<!--=================================================================================-->
<script>

import Service from "../../Service";

export default {
  data() {
    return{
      letters1: '',
      letters2: '',
      searched: false,
      relation: [],
      LeftLevel2: [],
      LeftLevel3: [],
      LeftLevel4: [],
      RightLevel2: [],
      RitghLevel3: [],
      RightLevel4: [],
      alf: [
        "A","B","C","D","E","F","G", "H","I", "J", "K", "L", "M","N", "O",
        "P", "Q", "R","S","T","U", "V","W", "X","Y", "Z", "?"
      ]
    };
  },
  watch: {
    letters1()  {
      this.letters1 = this.letters1.toUpperCase();
    },
    letters2() {
      this.letters2 = this.letters2.toUpperCase();
    },
    searched() {
      for(var x=0; x<relation.data.word1.length; x++){

      }

    }
  },
  computed: {
    checkChars1() {
      var wilds = 0;
      var output = [];
      var input = this.letters1;
      for (var y = 0; y < input.length; y++) {
        for (var i = 0; i < 27; i++) {
          if (input[y] == this.alf[i] && i == 26 && wilds < 2) {
            wilds++;
          } else if (input[y] == this.alf[i] && i < 26) {
            output.push(input[y]);
            i++;
          }
        }
      }
      output = output.slice(0, 14 - wilds);
      output.push(wilds.toString());
      return output;
    },
    checkChars2() {
      var wilds = 0;
      var output = [];
      var input = this.letters2;
      for (var y = 0; y < input.length; y++) {
        for (var i = 0; i < 27; i++) {
          if (input[y] == this.alf[i] && i == 26 && wilds < 2) {
            wilds++;
          } else if (input[y] == this.alf[i] && i < 26) {
            output.push(input[y]);
            i++;
          }
        }
      }
      output = output.slice(0, 14 - wilds);
      output.push(wilds.toString());
      return output;
    }
  },
  methods: {
    async relativator() {
      if (this.searched) {this.relation.splice(0);}
      this.relation = await Service.relativator(this.letters1, this.letters2);
      this.searched = true;
    }
  },
  async created() {
    try {
      this.relation = await Service.relativator();
    } catch (err) {
      this.error = err.message;
    }
  }

}
</script>
<!--=================================================================================-->
<!--=====================================================================STYLING=====-->
<!--=================================================================================-->
<style>
.word-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  position: relative;
  left: 0;
  padding: 0;
  top: 0px;
  overflow:hidden;}
</style>
