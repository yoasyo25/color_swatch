import './stylesheets/styles.scss'
import COLORS from './data/colors'
var $ = require('jQuery');

$(document).ready(function() {
  getTopColorAndCount();

  $("button").on("click", function() {
    colorSwatch();
  });

  $('textarea').keypress(function(event){
    if (event.keyCode == 13) {
      colorSwatch();
    }
  });


});


var getTopColorAndCount = function getTopColorAndCount() {
  $.get("https://color-swatch-api.herokuapp.com/api/v1/top_color", function(data) {
    $(".top-color").append(data.value + ": " + data.color_count);
  });
};


var colorSwatch = function colorSwatch() {
  var userInput = $("textarea").val().toLowerCase().split('.').join(' ').split(" "),
      uniqueUserInput = userInput.filter(function(item, index, array){ return array.indexOf(item) == index; }),
      matchingColors = [];

  $.each(uniqueUserInput, function(index, key ){
    if (COLORS[ key ]) {
      matchingColors.push(COLORS[key]);
    }
  });

  for (var i = 0; i < matchingColors.length;i++) {
    $(".colorized-text").append(`<div class="swatch" style="background-color:${matchingColors[i]}"></div>`);
  }

  userInput.forEach(function(input) {
    $.ajax({
     type: "POST",
     url: "https://color-swatch-api.herokuapp.com/api/v1/colors",
     data:  { color: { value: input } },
     dataType: "json"
   });
    // $.post( "https://color-swatch-api.herokuapp.com/api/v1/colors")
  })

}
