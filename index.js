const startButton = document.getElementById("start_btn");
const handleStart = () => {
  // add id active to start button if not already active
  if (!startButton.id.includes("active")) {
    startButton.id = "start_btn_active";
    startButton.textContent = "Stop";
  }
  // else remove id active from start button
  else {
    startButton.id = "start_btn";
    startButton.textContent = "Start";
  }
};

startButton.addEventListener("click", handleStart);
