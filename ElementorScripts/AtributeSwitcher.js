<script>
var $ = jQuery;

$(document).ready(function() {
	
  $('[data-showme]').click(function(event) {
    event.preventDefault();
    // Remove .active class from all elements with [data-showme]
    $('[data-showme]').removeClass('active');

    // Add .active class to the clicked element
    $(this).addClass('active');

    var showme = $(this).attr('data-showme');

    // Hide all elements with class .all-img
    $('.all-img').fadeOut(300);

    // Show the selected element with a fade-in effect
    $('.' + showme).fadeIn(500);
  });
});

</script>
