const path = require('path');
const fs = require("fs");
var exports = module.exports = {};

const dict1 = path.join(
    path.dirname(process.mainModule.filename), 'data', 'dict.txt'
);

const finder = [
    //A
    [0, 21, 895, 2213, 3113, 3466, 3847, 4444, 4477, 4802, 4816, 4865, 6386, 7375, 10162, 10178, 11238, 11358, 12810, 13912, 14512, 15402, 15708, 15846, 15950, 15985],
    //B
    [16083, null, null, 19200, 19202, null, null, 22021, 22076, null, null, 23815, null, null, 25228, null, null, 27315, null, null, 29333, null, 31028, null, 31032, null],
    //C
    [31131, null, null, null, 35921, null, null, 36852, 40458, null, null, 41242, null, 42777, 42786, null, null, 51864, 54054, 54056, 54066, null, 55245, null, 55251, 55890],
    //D
    [55914, null, null, null, 57048, null, null, 62877, 62932, 68245, null, null, null, null, 68263, null, null, 70060, 71176, null, 71182, 72045, 72049, null, 72109, 72414],
    //E
    [72422, 72743, 72829, 73293, 73465, 73508, 73691, 73839, 73843, 73947, 73975, 73995, 74753, 75866, 78282, 78319, 79136, 79355, 79820, 80308, 80691, 81174, 81556, 81570, 83555, 83690],
    //F
    [83692, null, null, null, 85309, null, null, null, 86515, 87973, null, 87978, null, null, 89767, null, null, 91841, null, null, 93267, null, null, null, 94182, null],
    //G
    [94199, null, null, null, 96069, null, null, 97255, 97360, 97953, null, 97957, 99046, 99048, 99159, null, null, 100311, null, null, 102348, null, 103201, null, 103210, null],
    //H
    [103476, null, null, null, 105966, null, null, null, 108403, null, null, null, 109274, null, 109277, null, null, 111506, null, null, 111512, null, 112233, null, 112236, null],
    //I
    [113902, 113927, 113943, 114176, null, 114440, 114451, 114539, null, 114541, 114543, 114551, 114785, 116307, 122241, 122357, null, 122374, 122799, 123296, 123403, 123404, 123423, 123425, null, 123436],
    //J
    [123448, null, null, null, 124165, null, null, 124519, 124523, null, null, null, null, 124776, 124778, null, null, null, null, null, 125259, null, null, null, 125720, null],
    //K
    [125723, 126434, null, null, 126436, null, 127044, 127046, 127156, null, null, 127946, null, 128063, 128411, null, null, 128708, 128831, null, 128833, 128971, 128991, null, 129001, null],
    //L
    [129083, null, null, null, 131297, null, null, 132756, 132758, null, null, 134640, null, null, 134646, null, null, null, null, null, 136095, null, 136798, null, 136800, null],
    //M
    [137058, 141011, null, null, 141015, null, 143736, 143738, 143742, null, null, null, 147501, 147503, 147520, 150488, null, 150490, null, null, 150498, 152171, 152173, null, 152176, 152686],
    //N
    [152690, null, null, null, 153585, null, 155100, 155115, 155117, null, 155859, null, null, null, 155861, null, null, null, null, 158502, 158503, null, null, null, 159054, null],
    //O
    [159146, 159225, 159805, 160165, 160327, 160410, 160575, 160613, 160629, 160705, 160707, 160727, 160949, 161124, 161378, 161515, 162034, 162036, 162926, 163265, 163344, 165205, 167627, 167690, 167887, 167910],
    //P
    [167955, null, null, null, 172201, 175511, null, 175518, 177374, null, null, 179164, null, 180796, 180857, null, null, 184140, 189704, 190145, 190231, null, 191576, null, 191580, 192058],
    //Q
    [192060, null, null, null, null, null, null, null, 192091, null, null, null, null, null, 192109, null, null, null, null, null, 192113, null, 193456, null, null, null],
    //R
    [193459, null, null, null, 195427, null, null, 204480, 204967, null, null, null, null, null, 205968, null, null, null, null, null, 207474, null, null, null, 208301, null],
    //S
    [208342, 210965, 210967, 213730, 213751, 216662, 216671, 216673, 219069, 220677, 220684, 221496, 222618, 223196, 224050, 226054, 228908, 229340, null, 229346, 233698, 238083, 238097, null, 238931, null],
    //T
    [239987, null, 242043, null, 242051, null, null, 244375, 246268, 247304, null, null, 247306, null, 247308, null, null, 249103, 252624, null, 252714, null, 253657, null, 254046, 254318],
    //U
    [254360, 254362, 254388, 254389, 254408, 254410, 254417, 254445, 254450, 254460, 254462, 254470, 254755, 254904, null, 262359, null, 263096, 263476, 263599, null, 263714, null, 263734, null, null],
    //V
    [263744, null, null, null, 264792, null, null, null, 266059, null, null, 267485, null, null, 267496, null, null, 268116, null, null, 268139, null, null, null, 268280, null],
    //W
    [268283, null, null, null, 269942, null, null, 270710, 271741, null, null, null, null, null, 272845, null, null, 273781, null, null, 274064, null, null, null, 274115, null],
    //X
    [274140, null, null, null, 274190, null, null, null, 274337, null, null, null, null, null, 274358, null, null, 274360, null, null, 274362, null, null, null, 274363, null],
    //Y
    [274449, 274745, 274751, 274760, 274762, 275017, 275019, null, 275022, null, null, 275094, 275099, 275105, 275107, 275340, null, 275349, 275355, 275361, 275378, null, 275478, null, null, null],
    //Z
    [275480, null, null, null, 275658, null, null, 275839, 275847, null, null, 276076, null, null, 276081, null, null, null, null, null, 276483, null, 276516, null, 276525, 276641]
];

var dictionary = fs.readFileSync(dict1).toString();
dictionary = dictionary.replace(/\\"/g, '\\"')
dictionary = dictionary.replace(/[\u0000-\u0019]+/g, "");
hereo = JSON.parse(dictionary);

var alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var pnts = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1,
    1, 1, 4, 4, 8, 4, 10, 0
];//scrabble points

//====================================================REMOVE WILDS
function findWilds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
//====================================================ORDER LETTERS
function orderLetters(arr) {
    var tmp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
//====================================================LETTERS TO NUMS
function lettersMap(letters) {
    var x = [];
    for (var o = 0; o < letters.length; o++) {
        for (var i = 0; i < 26; i++) {
            if (alf[i] === letters[o]) {
                x[o] = i;
                i = 26;
            }
        }
    }
    return x;
}
//==========================================================GET SCORE
function getScore(word) {
    var score = 0;
    for (var o = 0; o < word.length; o++) {
        for (var i = 0; i < 26; i++) {
            if (alf[i] === word[o]) {
                score += pnts[i]; i = 26;
            }
        }
    }
    return score;
}
//==================================================REMOVE DUPLICATES
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
//==================================================================
//====================================================FIND ALL WORDS
//==================================================================

//================================================================FIND ALL WORDS
exports.findWords = function (arr) {
    //===================================================ALL VARIABLES INITIALIZED
    if (arr == undefined) { return [];} //on null input
    var wilds = parseInt(arr[arr.length - 1]); //num of wild cards
    var wordsArr = []; //all possible words
    var scores = [];
    var leng = arr.length; //num of letters & wild Cards
    var letters = findWilds(arr.slice(0,arr.length - 1)) //num of just letters
    letters = orderLetters(letters); //ordered letters
    var letArr = lettersMap(letters); //letters as numbers
    var size = letArr.length; //num of letters
    var letLef; //remaining letters
    var u = false;
    var numWords = 0,
        letOne = 0,
        letTwo = 0,
        wild1 = 0,
        wild2 = 0;
    var start, end, letSize, next, wildsLeft, letLefLen, endL1, endL2;
    //====================================================WILD(S)-DEPENDANT SET-UP
    if (wilds > 0) {
        wild1 = 26;
        wild2 = 26;
    }
    //=================================================LOOPS INPUTS THROUGH [POS1]
    for (var i = 0; i < size + wild1; i++) {
        //============================================================ASSIGNS [POS1]
        if (i < size) {
            letOne = letArr[i];
        } else {
            letOne = (i - size);
            if (wilds === 1) { wild2 = 0; }
        }
        //===============================================LOOPS INPUTS THROUGH [POS2]
        for (var j = 0; j < size + wild2; j++) {
            //================================================AVOIDS USING CHARS TWICE
            if (j != i || j >= size) { //doesn't use same letter unless wilds
                //=========================================================ASSIGN [POS2]
                if (j < size) { letTwo = letArr[j];
                } else { letTwo = (j - size); }
                //===============================================[POS1][POS2] HAS WORDS?
                if (finder[letOne][letTwo] !== null) {
                    start = finder[letOne][letTwo];
                    endL1 = letOne;
                    endL2 = letTwo + 1;
                    end = 0;
                    //============================================FINDS END OF LETTER PAIR
                    while (finder[endL1][endL2] === null) {
                        if (endL1 == 25 && endL2 == 25) {
                            end = 277643;
                            break;
                        } else if (endL2 == 25) {
                            endL1++;
                            endL2 = 0;
                        } else { endL2++; }
                    }
                    end = finder[endL1][endL2];
                    letSize = end - start;
                    //===================================CHECKS ALL WORDS WITH LETTER PAIR
                    for (var t = 0; t < letSize; t++) {
                        next = start + t;
                        //==========================================GRABS ALL 2 LETTER WORDS
                        if (hereo[next].length == 2) { //checks for 2 letter words
                            wordsArr.push(hereo[finder[letOne][letTwo] + t]);
                            numWords++;
                        //==================================CHECKS ALL WORDS OF POSSIBLE LENGTH
                        } else if (hereo[next].length > 2 && hereo[next].length <= leng) {
                            letLef = JSON.parse(JSON.stringify(letters));
                            wildsLeft = 0;
                            //===================================DETERMINES WILDS & CHARS LEFT
                            if (i < size && j < size) { //pos 1 and 2 are not wild
                                wildsLeft = wilds;
                                letLef.splice(Math.max(i, j), 1);
                                letLef.splice(Math.min(i, j), 1);
                            } else if (j < size) { //pos 1 is wild
                                wildsLeft = wilds - 1;
                                letLef.splice(j, 1);
                            } else if (i < size) { //pos 2 is wild
                                wildsLeft = wilds - 1;
                                letLef.splice(i, 1);
                            }
                            letLefLen = letLef.length;
                            //===============================================LOOPS THROUGH [POS3]
                            for (var f = 2; f < hereo[next].length; f++) { //cycles [Pos3] of dict
                                u = false; //stores matching?
                                //=================================LOOPS THROUGH ALL INPUTS LEFT
                                for (var g = 0; g < letLefLen + wildsLeft; g++) {
                                    //====================================LOOPS THROUGH NONWILDS
                                    for (var c = 0; c < letLefLen; c++) {
                                        if (letLef[g] === hereo[next].charAt(f)) {
                                            letLef.splice(g, 1);
                                            letLefLen = letLef.length;
                                            u = true;
                                            break;
                                        }
                                    }
                                    //==================================================USES WILDS
                                    if (u != true && wildsLeft > 0) {
                                        wildsLeft--;
                                        u = true;
                                        break;
                                    }
                                }
                                //=================================================ADDS IF MATCH
                                if (u === false) {
                                    break; //not a match
                                } else if (f === hereo[next].length - 1) { //found word
                                    wordsArr.push(hereo[next]);
                                    numWords++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    //remove duplicates and get scores
    var unique = wordsArr.filter( onlyUnique );
    for (var t = 0; t < unique.length; t++){
        scores[t] = getScore(unique[t]);
    }
    var wordsApnts = [unique, scores];
    return wordsApnts;
};
