const style = {
    'Style1': 'css/main.css',
    'Style2': 'css/temp.css'
}

const styleBtn = document.querySelector("#changeStyles");
let linkTag = document.querySelector("link");
let linkTagURL = document.querySelector("link").href.split("css/")[0];
let radioButtons = document.querySelectorAll("input[name='style']");

let currentStyle = radioButtons[0].value;

styleBtn.addEventListener("click", () => {

  for(let radioBtn of radioButtons) {
    if(radioBtn.checked) {
      currentStyle = radioBtn.value;
    }
  }

  let finalURL = linkTagURL+style[currentStyle];

  linkTag.href = finalURL;

});
