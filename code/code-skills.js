let pause = new Image();
pause.src = "../pics/skills/pause.png";
pause.style.width = "50px";
pause.style.height = "50px";
let play = new Image();
play.src = "../pics/skills/play.png";
play.style.width = "50px";
play.style.height = "50px";
let languages = [
  "C#",
  "C",
  "Python",
  "MicroPython",
  "SQL",
  "PhP",
  "HTML-CSS",
  "javascript-ajax-jquery",
  "NODE-JS",
  "PLC Ladder Programming",
];
let languagesPics = [
  "csharp.jpg",
  "c.png",
  "python.png",
  "micropython.png",
  "sql.jpg",
  "php.png",
  "html-css.jpg",
  "javascript-ajax-jquery.jpg",
  "node-js.png",
  "ladder.png",
];
let skillsPicFrame = [];
let currentDisplayed = 0;
let auto = false;
let timerID = 0;
function PicFrame(index) {
  this.name = languages[index];
  this.counter = 1;
  this.image = new Image();
  this.image.src = "../pics/skills/" + languagesPics[index];
}
function fInit() {
  for (let i = 0; i < languages.length; i++) {
    let newImage = new PicFrame(i);
    skillsPicFrame.push(newImage);
    console.log(newImage);
  }

  showPic();
}
function showPic() {
  $("#mainImage").fadeOut(1000, () => {
    $("#mainImage").prop("src", skillsPicFrame[currentDisplayed].image.src);
    $("#readonlyTextBox").val(skillsPicFrame[currentDisplayed].name);
    $("img").fadeIn(1000);
  });

  PicFrame.counter++;
  console.log(skillsPicFrame[currentDisplayed]);
}
function FNext() {
  if (currentDisplayed == skillsPicFrame.length - 1) currentDisplayed = 0;
  else currentDisplayed++;

  showPic();
}
function FPrev() {
  if (currentDisplayed == 0) currentDisplayed = skillsPicFrame.length - 1;
  else currentDisplayed--;

  showPic();
}
function FAuto() {
  if (auto == false) {
    timerID = window.setInterval(FNext, 2000);
    $("#playPause").prop("src", pause.src);
    auto = true;
  } else {
    window.clearInterval(timerID);
    $("#playPause").prop("src", play.src);
    auto = false;
  }
}
$(document).ready(() => {
  fInit();
  $("#Previous").click(FPrev);
  $("#next").click(FNext);
  $("#playPause").click(FAuto);
  FAuto();
});
