const screens = {
  splash: document.querySelector("#splash"),
  loading: document.querySelector("#loading"),
  home: document.querySelector("#home"),
  error: document.querySelector("#error"),
};

const steps = {
  splash: document.querySelector("#step-splash"),
  loading: document.querySelector("#step-loading"),
  home: document.querySelector("#step-home"),
};

const progressBar = document.querySelector("#progress-bar");
const progressLabel = document.querySelector("#progress-label");
const loadingMessage = document.querySelector("#loading-message");
const restartButton = document.querySelector("#restart");
const errorButton = document.querySelector("#simulate-error");
const retryButton = document.querySelector("#retry");
const resetFromHomeButton = document.querySelector("#reset-from-home");

let timers = [];

function clearTimers() {
  timers.forEach((timer) => clearTimeout(timer));
  timers = [];
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("is-active", key === name);
  });

  Object.entries(steps).forEach(([key, step]) => {
    step.classList.toggle("active", key === name);
  });
}

function setProgress(value) {
  progressBar.style.width = `${value}%`;
  progressLabel.textContent = `${value}%`;
}

function runDemo(shouldFail = false) {
  clearTimers();
  setProgress(0);
  loadingMessage.textContent = "Validando sesion y cursos guardados...";
  showScreen("splash");

  timers.push(
    setTimeout(() => {
      showScreen("loading");
      setProgress(25);
    }, 1500),
    setTimeout(() => {
      loadingMessage.textContent = "Cargando imagenes, preferencias y contenido inicial...";
      setProgress(62);
    }, 2500),
    setTimeout(() => {
      loadingMessage.textContent = shouldFail
        ? "Hubo un problema al conectar con el servicio."
        : "Todo listo. Abriendo pantalla principal...";
      setProgress(100);
    }, 3600),
    setTimeout(() => {
      showScreen(shouldFail ? "error" : "home");
    }, 4300)
  );
}

restartButton.addEventListener("click", () => runDemo(false));
resetFromHomeButton.addEventListener("click", () => runDemo(false));
retryButton.addEventListener("click", () => runDemo(false));
errorButton.addEventListener("click", () => runDemo(true));

runDemo(false);
