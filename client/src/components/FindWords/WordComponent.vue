<template>
  <b-container fluid class="word-container lato purpBg">
    <!--=================================================================FIND-WORDS===-->
    <b-row class="mt-5 pt-5 pb-0" :style="{top: (searched) ? '0px':'60px !important',
            height: (searched) ? 'auto':'calc(100vh - 180px)'}">
    
      <b-col cols="10" offset="1" md="6" offset-md="3" class="mt-0 pt-0"
              :style="{top:(searched)?'0px !important':'25% !important'}">
        <h1 class="mb-3 white fs30">Scrabble Word Finder</h1>
        <b-form-group class="mb-0 form-border">
          <b-input-group>
            <b-form-input
              class="fs16"
              placeholder="Enter letters..."
              type="text"
              v-on:keyup.enter="findWords"
              v-model="letters"/>
              <b-input-group-append>
                <b-button 
                  class="fs16 no-border" 
                  v-on:click="findWords">Find Words!
                  </b-button>
              </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <p class="fs18 white" v-if="(letters.length==0)">Enter up to 14 letters, with up to 2 '?' for blanks.</p>
        <p class="fs18 white" v-else>
          {{checkChars.slice(0,checkChars.length - 1)}} and
          {{parseInt(checkChars.slice(checkChars.length-1, checkChars.length))}}
          blank<span 
          v-if="parseInt(checkChars.slice(checkChars.length-1, checkChars.length))!=1">s</span>.
        </p>
      </b-col>
    
    </b-row>
    <!--=================================================================ADVANCED-SEARCH==-->
    <b-row v-if="searched" class="lato mb-5 mt-0 pt-0">

      <h1 class="mb-3 mt-0 white">Advanced Search</h1>

      <b-col cols="7"  md="5" offset-md="2">
        <b-form-group class="mb-0 mt-0 pt-0 form-border">
          <b-input-group>
            <b-form-input 
              class="fs16"
              v-model="filter" 
              placeholder="Filter your search..."/>
            <b-input-group-append>
              <b-button 
                class="fs16 no-border white"
                :disabled="!filter" 
                @click="filter = ''">Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col cols="5" md="3">
        <b-form-group class="mb-0 form-border">
          <b-input-group class="fs16">
            <b-form-select  class="fs16" v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select  class="fs16" :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

    </b-row>
    <!--================================================================WORD-TABLES==-->
    <b-row align-h="center" class="fs16">
      <b-col cols="6" sm="4" md="3" lg="3" xl="2" v-for="size in sizes" :key="size">
        <b-row align-h="center" class="table-row pb-1">
          <div class="table-holder mt-3 turqBg">
            <h4 class="word-head mb-4 mt-0 pt-0 white">{{size + 2}} Letter Words</h4>
            <div class="table-div" scrolling="no" seamless="seamless">
              <b-table
                class="word-table mb-5"
                hover
                outlined
                bordered
                striped
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :current-page="currentPage[size]"
                :sort-direction="sortDirection"
                :items="items[[size]]"
                :fields="fields"
              />
            </div>
            <h2 class="word-count cntrTxt white pt-3">{{items[size].length}} Words</h2>
          </div>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="gap">
    </b-row>
  </b-container>
</template>
<!--=================================================================================-->
<!--=====================================================================SCRIPTS=====-->
<!--=================================================================================-->
<script>

import Service from "../../Service";

export default {
  name: "WordComponent",
  data() {
    return {
      sortBy: "PTS",
      letters: "",
      sortDirection: "desc",
      searched: false,
      sortDesc: true,
      filter: null,
      sizes: [],
      words: [],
      currentPage: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      fields: [
        { key: "Word", sortable: true },
        { key: "PTS", sortable: true }
      ],
      sortOptions: [
        { text: "Word", value: "Word" },
        { text: "PTS", value: "PTS" }
      ],
      items: [[], [], [], [], [], [], [], [], [], [], [], []],
      alf: [
        "A","B","C","D","E","F","G", "H","I", "J", "K", "L", "M","N", "O",
        "P", "Q", "R","S","T","U", "V","W", "X","Y", "Z", "?"
      ]
    };
  },
  watch: {
    words() {
      if (this.searched) {
        for (var r = 0; r < this.words.data[[0]].length; r++) {
          var obj = {};
          obj["Word"] = this.words.data[[0]][r];
          obj["PTS"] = this.words.data[[1]][r];
          this.items[[this.words.data[[0]][r].length - 2]].push(obj);
          if (!this.sizes.includes(this.words.data[[0]][r].length - 2)) {
            this.sizes.push(this.words.data[[0]][r].length - 2);
          }
        }
      }
      this.sizes.sort().reverse();
    },
    letters() {
      this.letters = this.letters.toUpperCase();
    }
  },
  computed: {
    checkChars() {
      var wilds = 0;
      var output = [];
      var input = this.letters;
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
    async findWords() {
      if (this.searched) {
        this.sizes.splice(0);
        this.words.data.splice(0);
        for (var c = 0; c < 12; c++) {
          this.items[[c]].splice(0);
        }
      }
      this.words = await Service.findWords(this.checkChars);
      this.searched = true;
    }
  },
  async created() {
    try {
      this.words = await Service.findWords();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>
<!--=================================================================================-->
<!--=====================================================================STYLING=====-->
<!--=================================================================================-->
<style scoped>
.word-container {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  margin: 0;
  position: relative;
  left: 0;
  padding: 0;
  top: 0px;
  overflow:hidden;}
.form-border{
  border: 2px solid #4EA792;
  border-radius: 5px;}
.no-border{
  border: none !important;
  background: #4EA792 !important;}
.gap{
  position: relative;
  display: block;
  top: 0;
  height: 200px;
  width: 100%;}
.word-head {
  font-size: 2rem;
  text-align: center;
  display: block;
  width: 100%;
  position: relative;
  margin: auto 0;
  padding: 10px 0 0 0;}
.table-holder{
  /* background-color: #323232; */
  border-radius: 10px;
  padding: 15px;}
.word-table{
  background-color: white; 
  opacity: 1 !important;}
.word-count {
  font-size: 1.5rem;
  text-align: center;
  display: block;
  width: 100%;
  position: relative;
  margin: auto 0;}
.my-1 {
  width: 100%;}
.foot {
  display: block;
  position: relative;
  height: 100px;
  width: 100%;}
.table-div {
  overflow-y: auto;
  overflow-x: hidden;
  height: 60vh;
  width: 100%;
  position: relative;
  display: block;
  scroll-behavior: smooth;
  margin-top: 0;
  padding-top: 0;}
::-webkit-scrollbar {
  width: 0px;}
</style>
