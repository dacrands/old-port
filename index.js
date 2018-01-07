// Typing effect
var automation =  "Automation";
document.getElementById("automation");



// Taken from w3schools
// I don't feel good about what I am about to do
// But until a better solution
var i = 0;
var txt = 'Automation';
var speed = 150;
var done = false;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("automation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log(i);
  }
  if (i === 10) {
    typeWriter2();
  }

}

var i2 = 0;
var txt2 = 'Data Stuff';
speed2 = 250;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("data").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed2);
    if (i2 === txt2.length){
      typeWriter3();
    }
  }
}
var i3 = 0;
var txt3 = 'Web Dev';
speed3 = 150;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("web").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed3);
  }

}

typeWriter();


// Button
$(".skills-button").click(function(){
    var skillsHeight = $(".skills").offset().top - 20;
    $("body, html").animate({
      scrollTop: skillsHeight
    }, 500);
});

$(".about-button").click(function(){
    var aboutHeight = $(".about").offset().top - 80;
    $("body, html").animate({
      scrollTop: aboutHeight
    }, 500);
});
