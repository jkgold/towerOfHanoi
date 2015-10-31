"use strict";

$(document).ready(init);

function init() {
  console.log('ready!');
  $('.container').on('click', decideWhatToDo);

}

function decideWhatToDo(){
  var supposedToHighlight = !$('.disk').hasClass('highLighted');

  if (supposedToHighlight) {
    var firstKid = $(this).find(">:first-child");
    firstKid.addClass("highLighted");
    console.log(firstKid)
  } else {
    $(".highLighted").prependTo($(this)).removeClass('highLighted');
    // move it
  }

}

// // function selectDisk(){
//   var firstKid = $(this).find(">:first-child");
//   firstKid.addClass("highLighted");
//   console.log(firstKid)
//
// }
//
// function moveDisk(){
//   $(".highLighted").appendTo($(this));
//
//
//
//
// }
