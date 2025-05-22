import routes from '../scripts/routes/routes';
import { getActiveRoute } from '../scripts/routes/url-parser';

// CSS imports
import '../assets/styles/styles.css';

// Class App untuk mengatur Navigasi dan Isi Halaman
class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;

    this._setupDrawer();
  }

  _setupDrawer() {
    this.#drawerButton.addEventListener('click', () => {
      this.#navigationDrawer.classList.toggle('open');
    });

    document.body.addEventListener('click', (event) => {
      if (
        !this.#navigationDrawer.contains(event.target) &&
        !this.#drawerButton.contains(event.target)
      ) {
        this.#navigationDrawer.classList.remove('open');
      }

      this.#navigationDrawer.querySelectorAll('a').forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove('open');
        }
      });
    });
  }

  // Function untuk Render Page sesuai URL
  async renderPage() {
    const url = getActiveRoute();
    const page = routes[url];

    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.querySelector('#main-content'),
    drawerButton: document.querySelector('#drawer-button'),
    navigationDrawer: document.querySelector('#navigation-drawer'),
  });
  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
});
<<<<<<< HEAD
=======

const emailBtn = document.getElementById("btn-submit-email");
const emailInput = document.getElementById("email");

emailBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  
  if (email === "") {
    alert("Anda belum mengisi email");
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    alert("Format email Anda salah");
    return;
  }
  
  alert("Terima kasih telah mengirimkan email Anda!");
  emailInput.value = "";
});

const navCommunity = document.getElementById('nav-community');
navCommunity.addEventListener('click', (e) => {
  e.preventDefault(); 
  alert('Komunitas akan segara hadir!');
})
>>>>>>> origin/ui-ux
