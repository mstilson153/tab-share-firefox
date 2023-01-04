qrImg = document.querySelector("#qr-code img")
generateButton = document.querySelector("#GenerateButton")

generateButton.addEventListener("click",()=>{
  browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    let tab = tabs[0];
    console.log(tab.url);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${tab.url}`;
  }, console.error) 
  document.getElementById('qr-code').style.display = 'block'
})