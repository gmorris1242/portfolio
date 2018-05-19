var main = $(".main-container");
var menuBtn = $(".btn");
var homeBtn = $(".home");
var aboutBtn = $(".about");
var workBtn = $(".work");
var contactBtn = $(".contact");
var navItem = $("li");
var navBar = $("nav");
var reverseNavItem = $(navItem.get().reverse());
var counter = 0;

homeBtn.click(function() {
  main.css("right","0");
  navItem.removeClass("active");
  homeBtn.addClass("active");
  navBar.css("color","white")
  navBar.css("background-color","#9a454d")
});

aboutBtn.click(function() {
  main.css("right","100%");
  navItem.removeClass("active");
  aboutBtn.addClass("active");
  navBar.css("color","#9a454d")
  navBar.css("background-color","white")
});

workBtn.click(function() {
  main.css("right","200%");
  navItem.removeClass("active");
  workBtn.addClass("active");
  navBar.css("color","#9a454d")
  navBar.css("background-color","white")
});

contactBtn.click(function() {
  main.css("right","300%");
  navItem.removeClass("active");
  contactBtn.addClass("active");
  navBar.css("color","#9a454d")
  navBar.css("background-color","white")
});

menuBtn.click(function() {
  menuBtn.addClass("avoid-clicks");
  if (navItem.css("display") == "none") {
    menuBtn.addClass("spin");
    navItem.each(function(index){
      $(this).delay(index * 300).fadeToggle();
    })
    setTimeout(enableClick,1500);
  } else {
    menuBtn.removeClass("spin");
    reverseNavItem.each(function(index){
      $(this).delay(index * 300).fadeToggle();
    })
    setTimeout(enableClick,1500);
  }
});

function enableClick() {
  menuBtn.removeClass("avoid-clicks");
}
