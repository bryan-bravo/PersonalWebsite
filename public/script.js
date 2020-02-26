$(document).ready(function(){
  let homePage = $("#home-page");
  let resume = $("#resume");
  
  // when starting only show home page
  resume.toggle();

  $(".dash-bar-item").click( function() {
    let selectedComponentId = $(this).attr("href");
    let mainComponents = $(".main-component");
    mainComponents.each(function(i, obj) {
      let id = $(this).attr("id")
      if(`#${id}` === selectedComponentId)
        $(this).toggle(true);
      else
        $(this).toggle(false);
    });
  });

});