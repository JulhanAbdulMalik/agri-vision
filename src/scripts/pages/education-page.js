export default class EducationPage {
  async render() {
    return `
      <section class="edu-container">
      <div class="search">
<<<<<<< Updated upstream
        <input type="text" id="search-bar" name="search-bar" class="search-bar" placeholder="Cari">
=======
        <input type="text" id="search-bar" name="search-bar" class="search-bar" placeholder="Cari penyakit tanaman">
>>>>>>> Stashed changes
        <button type="submit" class="btn-search" id="btn-search">Cari</button>
      </div>
      <div class="course-container" id="course-container">
        <!-- Cards will be inserted here dynamically -->
      </div>
        
      </section>
    `;
  }

  async afterRender() {
    // Load disease data
    const courseContainer = document.getElementById('course-container');
    
    // Import the database (you might need to adjust the path)
    const { database } = await import('../data/course-database.js');
    
    // Create cards for each disease
    database.forEach(disease => {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.innerHTML = `
        <div class="card-image-container">
          <img src="/images/course-images/${disease.case.toLowerCase().replace(/\s+/g, '-')}.jpg" class="image-card" alt="${disease.case}">
        </div>
        <div class="card-text-container">
          <h3 class="card-title">${disease.case}</h3>
          <p class="card-feature">${disease.ciri}</p>
        </div>
        <button class="card-btn" data-case="${disease.case}">Baca Selengkapnya</button>
      `;
      courseContainer.appendChild(card);
    });

    // Add click event listeners to all buttons
    document.querySelectorAll('.card-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const caseName = event.target.getAttribute('data-case');
        window.location.hash = `#/education/${caseName.toLowerCase().replace(/\s+/g, '-')}`;
      });
    });

    // Add search functionality
    document.getElementById('btn-search').addEventListener('click', () => {
      this.filterCourses();
    });

    document.getElementById('search-bar').addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.filterCourses();
      }
    });
  }

  filterCourses() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.querySelectorAll('.course-card');
    
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
}
