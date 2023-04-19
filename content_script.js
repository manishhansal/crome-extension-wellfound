let startApply = `var learnMoreButton = document.querySelectorAll('.styles-module_component__88XzG'); for (let i = 0; i < learnMoreButton.length; i++) { if (learnMoreButton[i].textContent === "Learn more") { learnMoreButton[i].click(); setTimeout(() => {var applyButton = document.querySelectorAll(".styles_component__Ov6jE"); applyButton[1].click(); console.log("Apply button clicked"); setTimeout(() => {var role = document.querySelector(".styles_jobTitle__Ykp_Y").textContent; var naam = document.querySelector("form div div h4.styles-module_component__3ZI84").textContent.split(" "); console.log("role",role); console.log("naam", naam[naam.length-2]); var msg = "Hi "+naam[naam.length - 2]+","+"I hope you're doing well! I'm interested in the role you posted: "+role+"."; console.log(msg); var textArea = document.querySelector("textarea.styles-module_component__2Y90D").textContent; textArea = msg; }, 5000); },2000);  console.log("Learn more targeted"); break;} };`;

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startApply") {
    chrome.tabs.executeScript({
      code: startApply,
    });
  } else if (message.action === "stopApply") {
    chrome.tabs.executeScript({
      code: "window.stop()",
    });
  }
});
