export default class HomePage {
  async render() {
    return `
      <section class="container">
        <h1>Home Page</h1>
        <img class="logo-home-page" src="images/Logo AgriVision-07.png" alt="">
        
        <img class="logo-home-page" src="images/kegiatan.png" alt="">
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}
