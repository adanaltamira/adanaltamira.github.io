"use strict";var App=function(){function a(){return Math.floor(3*Math.random()+1)}function b(a,b){switch(a){case"rock":if("rock"===b)return null;if("scissors"===b)return!0;if("paper"===b)return!1;break;case"paper":if("paper"===b)return null;if("rock"===b)return!0;if("scissors"===b)return!1;break;case"scissors":if("scissors"===b)return null;if("paper"===b)return!0;if("rock"===b)return!1}return null}function c(){return e[a()-1]}function d(a,c){var d=b(a,c);return null===d?d="Match":d?(d="Player One",f++):(d="Player Two",g++),d}var e=["rock","paper","scissors"],f=0,g=0,h=0,i=0;$(document).on("click",".btn-primary",function(a){a.preventDefault();var b=$(a.currentTarget),e=c(),j=c(),k=d(e,j);b.removeClass("btn-primary").addClass("btn-success"),$("#result-player-one").text(e),$("#player-one-count").text(f),$("#result-player-two").text(j),$("#player-two-count").text(g),3===f&&(h++,$("#player-one-count-total").text(h)),3===g&&(i++,$("#player-two-count-total").text(i)),3===f||3===g?($("#result").text(k+" Wins!"),b.html('Winner! <span class="glyphicon glyphicon-ok"></span>')):b.removeClass("btn-success").addClass("btn-primary")}),$(document).on("click",".btn-success",function(a){a.preventDefault(),f=0,g=0,$(a.currentTarget).html('Go! <span class="glyphicon glyphicon-ok"></span>').removeClass("btn-success").addClass("btn-primary"),$("#result-player-one").text("Player One Result"),$("#player-one-count").text(f),$("#result-player-two").text("Player Two Result"),$("#player-two-count").text(g),$("#result").text("")})};new App;