const axios = require('axios')
const util = require('util')

function requestError(syns){
  if(syns.status!=200){
    return "Error connecting to Thesaurus API"
  } else if(syns.data.length == 0){
    return "No synonyms for this word"
  } else {
    for( var c=0 ; c < syns.data.length ; c++){
      if(syns.data[c].score < 1700){//removes less related words
        syns.data.splice(c, 1);
        c--;
      }
    }
    return syns.data;
  }
}
function removeDuplicates(schema, level, word){
  if(level==3){
    for(var g=0; g<schema.length; g++){
      for(var t=0; t<schema[g].Level3.length; t++){
        if(schema[g].Level3[t].word == word.toLowerCase()
          ||schema[g].Level3[t].word == schema[g].word){
          schema[g].Level3.splice(t, 1);
          t--;
        }
      }
    }
  } else {//Level 4
    for(var h=0; h<schema.length; h++){
      for(var x=0; x<schema[h].Level3.length; x++){
        for(var y=0; y<schema[h].Level3[x].Level4.length; y++){
          if(schema[h].Level3[x].word == schema[h].Level3[x].Level4[y].word
            ||schema[h].Level3[x].Level4[y].word == schema[h].word
            ||schema[h].Level3[x].Level4[y].word == word.toLowerCase()){
            schema[h].Level3[x].Level4.splice(y, 1);
            y--;
          }
        }
      }
    }
  }
  return schema;
}

async function getSchema(word){
  console.log(word);
  const url = 'https://api.datamuse.com/words?rel_syn=';
  var schema =  await axios.get(url+word);
    // .catch(function (error) { return "error";});
  schema = requestError(schema);//stores level 2 synonyms

  for( var b = 0 ; b < schema.length ; b++){//adds level 3 syns
    var level3 = await axios.get(url+schema[b].word);
      // .catch(function (error) { return "error";});
    level3 = requestError(level3);
    schema[b].Level3 = level3;
  }
  schema = await removeDuplicates(schema, 3, word);

  for( var b = 0 ; b < schema.length ; b++){
    for( var a = 0 ; a < schema[b].Level3.length ; a++){//adds level 4 syns
      var level4 = await axios.get(url+schema[b].Level3[a].word);
        // .catch(function (error) { return "error";});
      level4 = requestError(level4);
      schema[b].Level3[a].Level4 = level4;
    }
  }
  schema = await removeDuplicates(schema, 4, word);
  return schema;
}

exports.getRelationship = async function (word1, word2) {
  word1schema = await getSchema(word1);
  //console.log(util.inspect(word1schema, false, null));
  word2schema = await getSchema(word2);
  //console.log(util.inspect(word2schema, false, null));
  var matches = {"word1":[],"word2":[]};

  //==================================================================================
  //=============================================================================L2===
  //==================================================================================
  for(var h=0; h<word1schema.length; h++){
    for(var r=0; r<word2schema.length; r++){
      //===============================================================================R2 & L2
      if(word1schema[h].word == word2schema[r].word){
        console.log("===================R2&L2")
        console.log(word1schema[h].word);
        console.log(word2schema[r].word);
        matches.word1.push({"connection":[{"L":2},{"R":2},
        {"Level2":word1schema[h].word}]});
        matches.word2.push({"connection":[{"L":2},{"R":2},
        {"Level2":word2schema[r].word}]});
      }
      for(var z=0; z<word2schema[r].Level3.length; z++){
        //===============================================================================R3 & L2
        if(word1schema[h].word == word2schema[r].Level3[z].word){
          console.log("===================R3&L2")
          console.log(word1schema[h].word);
          console.log(word2schema[r].Level3[z].word);
          matches.word1.push({"connection":[{"L":2},{"R":3},
          {"Level2":word1schema[h].word}]});
          matches.word2.push({"connection":[{"L":2},{"R":3},
          {"Level2":word2schema[r].word},
          {"Level3":word2schema[r].Level3[z].word}]});
        }
        for(var x=0; x<word2schema[r].Level3[z].Level4.length; x++){
          //===============================================================================R4 & L2
          if(word1schema[h].word == word2schema[r].Level3[z].Level4[x].word){
            console.log("===================R4&L2")
            console.log(word1schema[h].word);
            console.log(word2schema[r].Level3[z].word);
            matches.word1.push({"connection":[{"L":2},{"R":3},
            {"Level2":word1schema[h].word}]});
            matches.word2.push({"connection":[{"L":2},{"R":3},
            {"Level2":word2schema[r].word},
            {"Level3":word2schema[r].Level3[z].word}]});
          }
        }
      }
    }
    //==================================================================================
    //=============================================================================L3===
    //==================================================================================
    for(var f=0; f<word1schema[h].Level3.length; f++){
      for(var r=0; r<word2schema.length; r++){
        //===============================================================================R2 & L3
        if(word1schema[h].Level3[f].word == word2schema[r].word){
          console.log("===================R2&L3")
          console.log(word1schema[h].Level3[f].word);
          console.log(word2schema[r].word);
          matches.word1.push({"connection":[{"L":3},{"R":2},
          {"Level2":word1schema[h].word},
          {"Level3":word1schema[h].Level3[f].word}]});
          matches.word2.push({"connection":[{"L":3},{"R":2},
          {"Level2":word2schema[r].word}]});
        }
        for(var z=0; z<word2schema[r].Level3.length; z++){
          //===============================================================================R3 & L3
          if(word1schema[h].Level3[f].word == word2schema[r].Level3[z].word){
            console.log("===================R3&L3")
            console.log(word1schema[h].Level3[f].word);
            console.log(word2schema[r].Level3[z].word);
            matches.word1.push({"connection":[{"L":3},{"R":3},
            {"Level2":word1schema[h].word},
            {"Level3":word1schema[h].Level3[f].word}]});
            matches.word2.push({"connection":[{"L":3},{"R":3},
            {"Level2":word2schema[r].word},
            {"Level3":word2schema[r].Level3[z].word}]});
          }
          for(var x=0; x<word2schema[r].Level3[z].Level4.length; x++){
            //===============================================================================R4 & L3
            if(word1schema[h].Level3[f].word == word2schema[r].Level3[z].Level4[x].word){
              console.log("===================R4&L3")
              console.log(word1schema[h].Level3[f].word);
              console.log(word2schema[r].Level3[z].Level4[x].word);
              matches.word1.push({"connection":[{"L":3},{"R":4},
              {"Level2":word1schema[h].word},
              {"Level3":word1schema[h].Level3[f].word},]});
              matches.word2.push({"connection":[{"L":3},{"R":4},
              {"Level2":word2schema[r].word},
              {"Level3":word2schema[r].Level3[z].word},
              {"Level4":word2schema[r].Level3[z].Level4[x].word}]});
            }
          }
        }
      }
      //==================================================================================
      //=============================================================================L4===
      //==================================================================================
      for(var d=0; d<word1schema[h].Level3[f].Level4.length; d++){
        for(var r=0; r<word2schema.length; r++){
          //===============================================================================R2 & L4
          if(word1schema[h].Level3[f].Level4[d].word == word2schema[r].word){
            console.log("===================R2&L4");
            console.log(word1schema[h].Level3[f].Level4[d].word);
            console.log(word2schema[r]);
            matches.word1.push({"connection":[{"L":4},{"R":2},
            {"Level2":word1schema[h].word},
            {"Level3":word1schema[h].Level3[f].word},
            {"Level4":word1schema[h].Level3[f].Level4[d].word}]});
            matches.word2.push({"connection":[{"L":4},{"R":2},
            {"Level2":word2schema[r].word}]});
          }
          for(var z=0; z<word2schema[r].Level3.length; z++){
            //===============================================================================R3 & L4
            if(word1schema[h].Level3[f].Level4[d].word == word2schema[r].Level3[z].word){
              console.log("===================R3&L4")
              console.log(word1schema[h].Level3[f].Level4[d].word);
              console.log(word2schema[r].Level3[z].word);
              matches.word1.push({"connection":[{"L":4},{"R":3},
              {"Level2":word1schema[h].word},
              {"Level3":word1schema[h].Level3[f].word},
              {"Level4":word1schema[h].Level3[f].Level4[d].word}]});
              matches.word2.push({"connection":[{"L":4},{"R":3},
              {"Level2":word2schema[r].word},
              {"Level3":word2schema[r].Level3[z].word}]});
            }
            for(var x=0; x<word2schema[r].Level3[z].Level4.length; x++){
              //===============================================================================R4 & L4
              if(word1schema[h].Level3[f].Level4[d].word == word2schema[r].Level3[z].Level4[x].word){
                console.log("===================R4&L4");
                console.log(word1schema[h].Level3[f].Level4[d].word);
                console.log(word2schema[r].Level3[z].Level4[x].word);
                matches.word1.push({"connection":[{"L":4},{"R":4},
                {"Level2":word1schema[h].word},
                {"Level3":word1schema[h].Level3[f].word},
                {"Level4":word1schema[h].Level3[f].Level4[d].word}]});
                matches.word2.push({"connection":[{"L":4},{"R":4},
                {"Level2":word2schema[r].word},
                {"Level3":word2schema[r].Level3[z].word},
                {"Level4":word2schema[r].Level3[z].Level4[x].word}]});
              }
            }
          }
        }
      }
    }
  }
  console.log(util.inspect(matches, false, null));
  return matches;

}
  








