var pigLatinGenerator = function(rawSentence) {
  var wordSplit = rawSentence.split(" ");
  // alert(wordSplit);
  var pushedWords = [];
  var secondWords = [];

  wordSplit.forEach(function(word) {
    // var letterSplit = word.split("");
    // alert(word.charAt(0));
    if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u") {
      // alert("this starts with an a e i o or u");
      pushedWords.push(word + "ay");

    } else {
      pushedWords.push(word.slice(1, word.length));
      secondWords.push(word + "ay");
}

  });



  alert(pushedWords);
  alert(secondWords);
}









$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var rawSentence = $("input#rawSentence").val();
    var processedSentence = pigLatinGenerator(rawSentence);
    $(".answer p").text(processedSentence);
  });
});

// var pigLatinGenerator = function(rawSentence) {
//   var wordSplit = rawSentence.split(" ");
//   // alert(wordSplit);
//   var pushedWords = [];
//
//
//   wordSplit.forEach(function(word) {
//     // var letterSplit = word.split("");
//     // alert(word.charAt(0));
//     if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u") {
//       // alert("this starts with an a e i o or u");
//       pushedWords.push(word + "ay");
//     } else {
//
//     }
//
//   });
//   alert(pushedWords);
// }
//
