import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
import "semantic-ui-sass";
$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
})