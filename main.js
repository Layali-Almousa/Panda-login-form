let usernameRef =document.getElementById("username");
let passwordRef=document.getElementById("password");
let eyeL =document.querySelector(".eyesball-l");
let eyeR = document.querySelector(".eyesball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalEyeStyle = () => {
    eyeL.style.cssText =`
    left:0.6em;
    top: 0.6em;
    `;
    eyeR.style.cssText=`
    righe:0.6em;
    top:0.6em;
    `;
};

let normalHandStyle = () =>{
handL.style.cssText = `
     height:2.81em;
     left:7.5em;
     transform: rotate(0deg);
`;
handR.style.cssText = `
height: 2.81em;
right:7.5em;
transform: rotate(0deg);
`;
};

usernameRef.addEventListener("focus",() =>{
eyeL.style.cssText =` 
left:0.75em;
top:1.12em;
`;
eyeR.style.cssText =`
right:0.75em;
top:1.12em;
`;
normalHandStyle();
});
passwordRef.addEventListener("focus", () => {
handL.style.cssText =`
height:6.56em;
top:1.87em;
left:5.75em;
transform:rotate(155deg);
`;
handR.style.cssText =`
height:6.56em;
top: 1.87em;
right:5.75em;
transform:rotate(-155deg);
`;
normalEyeStyle();

});