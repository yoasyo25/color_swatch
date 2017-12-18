import './stylesheets/styles.scss'
import COLORS from './data/colors'
var $ = require('jQuery');

$(document).ready(function() {
  getTopColorAndCount();

  $("button").on("click", function() {

    var userInput = $("textarea").val().split(" ");

    var uniqueUserInput = userInput.filter(function(item, index, array){ return array.indexOf(item) == index; });

    var matchingColors = [];

    $.each(uniqueUserInput, function(index, key ){
      if (COLORS[ key ]) {
        matchingColors.push(COLORS[key]);
      }
    });

  console.log(matchingColors)


  });
});


var getTopColorAndCount = function getTopColorAndCount() {
  $.get("https://color-swatch-api.herokuapp.com/api/v1/top_color", function(data) {
    $(".top-color").append(data.value + ": " + data.color_count);
  });
};
