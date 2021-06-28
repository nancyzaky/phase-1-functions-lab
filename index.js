// Code your solution in this file!
const distanceFromHqInBlocks = (loc)=> {
  const blocks = loc < 42? 42-loc : loc-42;
  return blocks;
}

const distanceFromHqInFeet = (loc)=> {
return distanceFromHqInBlocks(loc) * 264;
}

const distanceTravelledInFeet = (start, end) => {
  const distance = start>end ? start-end : end-start;
  return distance * 264

}
const calculatesFarePrice = (start, end)=> {
let cost;
const distanceInFeet = distanceTravelledInFeet(start, end);
if (distanceInFeet <= 400) {return 0}
 else if (distanceInFeet >= 2500) {
   return 'cannot travel that far' ;
 } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    cost = distanceInFeet - 400;
    return cost * 2 /100;
 } else if (distanceInFeet >2000 && distanceInFeet< 2500) {
   return 25;
 }
}

