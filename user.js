window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script2 = function()
{
  let rec = document.querySelector("[data-acc-text*='s212rt']");
let id = rec;
let width = window.innerWidth;


rec.addEventListener('mouseover', () => {
console.log("in")
  gsap.to(rec, { rotation: 25, duration: 0.5 });
});

rec.addEventListener('mouseout', () => {
console.log("out")
  gsap.to(rec, { rotation: 0,  duration: 0.5 });;
});



}

window.Script3 = function()
{
  let rec = document.querySelector("[data-acc-text*='s212rt']");
let id = rec;
let width = window.innerWidth;


rec.addEventListener('mouseover', () => {
console.log("in")
  gsap.to(rec, { rotation: 25, duration: 0.5 });
});

rec.addEventListener('mouseout', () => {
console.log("out")
  gsap.to(rec, { rotation: 0,  duration: 0.5 });;
});



}

window.Script4 = function()
{
  
 let Eltxt = document.querySelectorAll("[data-acc-text*='l1']");
 console.log(Eltxt[0]);

gsap.fromTo(Eltxt[0], {scaleX:0}, 
                    {scaleX:1, duration: 1.25,transformOrigin: "left", ease: "none", repeat: -1, yoyo:true });
}

window.Script5 = function()
{
  let rec = document.querySelector("[data-acc-text*='ssd1']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 1.5, ease: "none",}, 
{scale:0.9,opacity:1,duration: 1.5, ease: "none"});


}

window.Script6 = function()
{
  let rec = document.querySelector("[data-acc-text*='s415rt']");
let id = rec;
let width = window.innerWidth;


rec.addEventListener('mouseover', () => {
console.log("in")
  gsap.to(rec, { rotation: 45, duration: 0.5 });
});

rec.addEventListener('mouseout', () => {
console.log("out")
  gsap.to(rec, { rotation: 3,  duration: 0.5 });;
});



}

window.Script7 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap1']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script8 = function()
{
  let rec = document.querySelector("[data-acc-text*='s415rt']");
let id = rec;
let width = window.innerWidth;


rec.addEventListener('mouseover', () => {
console.log("in")
  gsap.to(rec, { rotation: 45, duration: 0.5 });
});

rec.addEventListener('mouseout', () => {
console.log("out")
  gsap.to(rec, { rotation: 3,  duration: 0.5 });;
});



}

window.Script9 = function()
{
  let rec = document.querySelector("[data-acc-text*='ssd2']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 1.5, ease: "none",}, 
{scale:0.9,opacity:1,duration: 1.5, ease: "none"});


}

window.Script10 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap2']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script11 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap1']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script12 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap2']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script13 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap3']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script14 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap4']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script15 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap11']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script16 = function()
{
  let rec = document.querySelector("[data-acc-text*='s4lb']");
let id = rec;
let width = window.innerWidth;


rec.addEventListener('mouseover', () => {
console.log("in")
  gsap.to(rec, { rotation: 45, duration: 0.5 });
});

rec.addEventListener('mouseout', () => {
console.log("out")
  gsap.to(rec, { rotation: 3,  duration: 0.5 });;
});



}

window.Script17 = function()
{
  let rec = document.querySelector("[data-acc-text*='s4lb']");
let id = rec;
let width = window.innerWidth;


rec.addEventListener('mouseover', () => {
console.log("in")
  gsap.to(rec, { rotation: 45, duration: 0.5 });
});

rec.addEventListener('mouseout', () => {
console.log("out")
  gsap.to(rec, { rotation: 3,  duration: 0.5 });;
});



}

window.Script18 = function()
{
  let rec = document.querySelector("[data-acc-text*='s4rt']");
let id = rec;
let width = window.innerWidth;


rec.addEventListener('mouseover', () => {
console.log("in")
  gsap.to(rec, { rotation: 20, duration: 0.5 });
});

rec.addEventListener('mouseout', () => {
console.log("out")
  gsap.to(rec, { rotation: 0,  duration: 0.5 });;
});



}

window.Script19 = function()
{
  let rec = document.querySelector("[data-acc-text*='s4rt']");
let id = rec;
let width = window.innerWidth;


rec.addEventListener('mouseover', () => {
console.log("in")
  gsap.to(rec, { rotation: 20, duration: 0.5 });
});

rec.addEventListener('mouseout', () => {
console.log("out")
  gsap.to(rec, { rotation: 0,  duration: 0.5 });;
});



}

window.Script20 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script21 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap1']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

window.Script22 = function()
{
  let rec = document.querySelector("[data-acc-text*='tap2']");
let id = rec;
let width = window.innerWidth;

gsap.fromTo(id,
{scale:1, opacity:1,  duration: 0.5, ease: "none",}, 
{scale:0.7,opacity:0.3,duration: 0.5, ease: "none",repeat:-1, yoyo:true});


}

};
