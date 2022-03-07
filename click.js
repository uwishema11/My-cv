const color=document.querySelectorAll(".color");
const border=document.querySelectorAll(".border");

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
 
const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
 
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};
 
const setColor = () => {
  const randomColor = getRandomColor();
  color.forEach(element=>{element.style.color = randomColor;})
  color.forEach(element=>{element.style.color = randomColor;})
  border.forEach(element=>{element.style.borderLeft=`1px solid ${randomColor}`;})
  
};
 
document.getElementById("name").addEventListener('click',setColor);