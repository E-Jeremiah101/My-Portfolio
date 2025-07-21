const content = document.getElementById("content");
const links = document.querySelectorAll(".nav-link");

const pages = {
  home: `<h1>Home</h1><p>Welcome to the homepage!</p>`,
  about: `<h1>About</h1><p>We're learning how to build SPAs.</p>`,
  contact: `<h1>Contact</h1><p>Reach out to us here.</p>`,
};

function loadPage(page) {
  // Smooth fade out
  content.style.opacity = 0;

  setTimeout(() => {
    // Load new content
    content.innerHTML = pages[page] || "<h1>Page not found</h1>";
    
    // Fade back in
    content.style.opacity = 1;
  }, 200);
}

function updateActiveLink(page) {
  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${page}`);
  });
}

function handleRouteChange() {
  const page = location.hash.replace("#", "") || "home";
  loadPage(page);
  updateActiveLink(page);
}

// On hash change (URL fragment changes), load the correct page
window.addEventListener("hashchange", handleRouteChange);

// On first load
window.addEventListener("load", handleRouteChange);