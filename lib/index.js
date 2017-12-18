import './stylesheets/styles.scss'
import COLORS from './data/colors'
var $ = require('jQuery');

$(document).ready(function() {
  getTopColorAndCount();


});


var getTopColorAndCount = function getTopColorAndCount() {
  $.get("https://color-swatch-api.herokuapp.com/api/v1/top_color", function(data) {
    $(".top-color").append(data.value + ": " + data.color_count);
  });
};
