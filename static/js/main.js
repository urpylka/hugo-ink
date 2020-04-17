document.addEventListener("DOMContentLoaded", function(){
  let toggle = document.getElementById("scheme-toggle");
  let darkScheme = document.getElementById("dark-scheme");

  let scheme = "light";

  // Check user's settings
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    scheme = "dark";
  }

  // Check saved settings
  let savedScheme = localStorage.getItem("scheme");
  if(savedScheme) {
    scheme = savedScheme;
  }

  if(scheme == "dark") {
    darkscheme(toggle, darkScheme);
  } else {
    lightscheme(toggle, darkScheme);
  }

  toggle.addEventListener("click", () => {
    if (toggle.className === "light") {
      darkscheme(toggle, darkScheme);
    } else if (toggle.className === "dark") {
      lightscheme(toggle, darkScheme);
    }
  });
});

function darkscheme(toggle, darkScheme) {
  localStorage.setItem("scheme", "dark");
  toggle.innerHTML = feather.icons.sun.toSvg();
  toggle.className = "dark";
  darkScheme.disabled = false;
}

function lightscheme(toggle, darkScheme) {
  localStorage.setItem("scheme", "light");
  toggle.innerHTML = feather.icons.moon.toSvg();
  toggle.className = "light";
  darkScheme.disabled = true;
}
