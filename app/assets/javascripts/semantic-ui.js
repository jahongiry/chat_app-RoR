//= require semantic-ui/modules/accordion.js 
//= require semantic-ui/modules/behavior/api.js 
//= require semantic-ui/modules/behavior/colorize.js 
//= require semantic-ui/modules/behavior/form.js 
//= require semantic-ui/modules/behavior/state.js 
//= require semantic-ui/modules/chatroom.js 
//= require semantic-ui/modules/checkbox.js 
//= require semantic-ui/modules/dimmer.js 
//= require semantic-ui/modules/dropdown.js 
//= require semantic-ui/modules/modal.js 
//= require semantic-ui/modules/nag.js 
//= require semantic-ui/modules/popup.js 
//= require semantic-ui/modules/rating.js 
//= require semantic-ui/modules/search.js 
//= require semantic-ui/modules/shape.js 
//= require semantic-ui/modules/sidebar.js 
//= require semantic-ui/modules/tab.js 
//= require semantic-ui/modules/transition.js 
//= require semantic-ui/modules/video.js 
//= require jquery
// Loads all Semantic javascripts
//= require semantic-ui

import "semantic-ui-sass";
$(document).on("turbolinks:load", () => $(".ui.dropdown").dropdown());

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
})