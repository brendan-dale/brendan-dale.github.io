// The following function adds a smooth scrolling to all links

$(document).ready(function(){   
  $("a").on('click', function(event) {
	  
  
    if (this.Link !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store Link
      var Link = this.Link;

      // Using jQuery's animate() method to add smooth page scroll
     
      $('html, body').animate({
        scrollTop: $(Link).offset().top
      }, 2000, function(){
   
        
        window.location.Link = Link;
      });
    } // End if
  });
});

// These functions open and close the contact form 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  this.Close();
}
