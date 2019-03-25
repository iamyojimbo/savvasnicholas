//////////////////////////
val = 0
startTime = 7
word1Start = startTime
word1End = word1Start + 0.5
word1Wait = 0.5
word2Start = word1Start + word1Wait
word2End = word2Start + 0.5
word2Wait = 1.5
word3Start = word2Start + word2Wait
word3End = word3Start + 0.5
word3Wait = 0.7
word4Start = word3Start + word3Wait
word4End = word4Start + 0.5

if (time > word4End) {
  val = 33
}
else if (time > word4Start) {
  val = easeOut(time, word4Start, word4End, 25, 33)
}
else if (time > word3Start + word3Wait) {
  val = 24
}
else if (time > word3Start) {
  val = easeOut(time, word3Start, word3End, 15, 24)
}
else if (time > word2Start + word2Wait) {
  val = 15
}
else if (time > word2Start) {
  val = easeOut(time, word2Start, word2End, 6, 15)
}
else if (time > word1Start + word1Wait) {
  val = 6
}
else if (time > word1Start) {
  val = easeIn(time, word1Start, word1End, 0, 6)
}
else if (time < startTime) {
  val = 0
}
val

/////////
// skew
transform.position.speed / 50

/////////
var s = thisComp.layer("savvas nicholas  software engineer").text.animator("Animator 1").selector("Range Selector 1").start

v = 33
v2 = 10.4
y = 0
c1 = 6
c2 = 14.999999

if (s <= c1) {
  y = 0
  x = s * v
}
if (s > c1) {
  y = 70
  x = (s - c1) * v
}
if (s > c2) {
  y = 116
  x = (s - c2) * v2 - 4
}
if (s == 100) {
  y = 116
  x = (s - c2 + 1) * v2
}
p = [x, y]
add(transform.position, p)
add(transform.position, p)

////
// opacity
var s = thisComp.layer("savvas nicholas  software engineer").text.animator("Animator 1").selector("Range Selector 1").start
if (s != 15 && s > 0 && s < 33) {
  o = 100
}
else {
  o = (1 - Math.round( time % 1 )) * 100
}
o


////
// scale
var s = thisComp.layer("savvas nicholas  software engineer").text.animator("Animator 1").selector("Range Selector 1").start

if (s > 14.999999) {
  [40, 40]
}
else {
  [100, 100]
}