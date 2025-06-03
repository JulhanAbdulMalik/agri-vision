export default class DetectionSpecificPage {
  constructor(plantType) {
    this.plantType = plantType;
    this.mediaStream = null;
    this.selectedImage = null;
  }

  async render() {
    return `
      <section class="detection-specific-container">
        <h1>Deteksi Tanaman ${this.plantType}</h1>
        
        <div class="detection-options">
          <select id="media-source" class="form-input">
            <option value="none">none</option>
            <option value="gallery">Pilih dari Galeri</option>
            <option value="camera">Gunakan Kamera</option>
          </select>
        </div>
        
        <div class="camera-preview-container" style="display:none;">
          <video id="camera-preview" autoplay playsinline></video>
          <button type="button" id="capture-btn" class="btn-take-photo">Ambil Foto</button>
        </div>
        
        <div class="image-preview-container">
          <canvas id="photo-canvas" style="display:none;"></canvas>
          <input type="file" id="gallery-input" accept="image/*" style="display:none;">
          <img id="photo-preview" class="photo-preview" style="display:none;">
          <button type="button" id="retake-btn" class="btn-take-photo" style="display:none;">Ambil Ulang</button>
        </div>
        
        <div class="action-buttons">
          <button id="detect-btn" class="action-btn">Deteksi</button>
          <button id="cancel-btn" class="action-btn">Batal</button>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.mediaSourceSelect = document.getElementById('media-source');
    this.cameraPreview = document.getElementById('camera-preview');
    this.cameraContainer = document.querySelector('.camera-preview-container');
    this.galleryInput = document.getElementById('gallery-input');
    this.photoPreview = document.getElementById('photo-preview');
    this.retakeBtn = document.getElementById('retake-btn');
    this.captureBtn = document.getElementById('capture-btn');
    this.detectBtn = document.getElementById('detect-btn');
    this.cancelBtn = document.getElementById('cancel-btn');

    this.mediaSourceSelect.addEventListener('change', (e) => {
      this.handleMediaSourceChange(e.target.value);
    });

    this.captureBtn.addEventListener('click', () => {
      this.capturePhoto();
    });

    this.retakeBtn.addEventListener('click', () => {
      this.resetPhotoInput();
    });

    this.detectBtn.addEventListener('click', () => {
      this.detectPlant();
    });

    this.cancelBtn.addEventListener('click', () => {
      this.cleanup();
      window.history.back();
    });

    this.galleryInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        this.displayPhotoPreview(URL.createObjectURL(e.target.files[0]));
      }
    });
  }

  cleanup() {
    this.stopCamera();

    if (this.mediaSourceSelect) {
      this.mediaSourceSelect.removeEventListener(
        'change',
        this.handleMediaSourceChange,
      );
    }
    if (this.captureBtn) {
      this.captureBtn.removeEventListener('click', this.capturePhoto);
    }
    if (this.retakeBtn) {
      this.retakeBtn.removeEventListener('click', this.resetPhotoInput);
    }
    if (this.detectBtn) {
      this.detectBtn.removeEventListener('click', this.detectPlant);
    }
    if (this.cancelBtn) {
      this.cancelBtn.removeEventListener('click', this.cleanup);
    }
    if (this.galleryInput) {
      this.galleryInput.removeEventListener('change', this.handleImageUpload);
    }
  }

  async handleMediaSourceChange(source) {
    this.stopCamera();

    this.cameraContainer.style.display = 'none';
    this.photoPreview.style.display = 'none';
    this.retakeBtn.style.display = 'none';

    if (source === 'none') {
      return;
    } else if (source === 'camera') {
      this.cameraContainer.style.display = 'block';
      try {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false,
        });

        if (this.cameraPreview) {
          this.cameraPreview.srcObject = this.mediaStream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert(
          'Tidak dapat mengakses kamera. Silakan coba lagi atau pilih dari galeri.',
        );

        this.mediaSourceSelect.value = 'gallery';
        this.handleMediaSourceChange('gallery');
      }
    } else if (source === 'gallery') {
      this.galleryInput.click();
    }
  }

  capturePhoto() {
    const canvas = document.getElementById('photo-canvas');
    const context = canvas.getContext('2d');

    canvas.width = this.cameraPreview.videoWidth;
    canvas.height = this.cameraPreview.videoHeight;
    context.drawImage(this.cameraPreview, 0, 0, canvas.width, canvas.height);

    this.displayPhotoPreview(canvas.toDataURL('image/jpeg'));
    this.stopCamera();
    this.cameraContainer.style.display = 'none';
  }

  displayPhotoPreview(imageSrc) {
    this.photoPreview.src = imageSrc;
    this.photoPreview.style.display = 'block';
    this.retakeBtn.style.display = 'block';
    this.selectedImage = imageSrc;
  }

  resetPhotoInput() {
    this.photoPreview.src = '';
    this.photoPreview.style.display = 'none';
    this.retakeBtn.style.display = 'none';
    this.galleryInput.value = '';
    this.selectedImage = null;

    this.mediaSourceSelect.value = 'camera';
    this.handleMediaSourceChange('camera');
  }

  stopCamera() {
    try {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach((track) => {
          track.stop();
          track.enabled = false;
        });
        this.mediaStream = null;
      }

      if (this.cameraPreview) {
        this.cameraPreview.pause();
        this.cameraPreview.srcObject = null;
        this.cameraPreview.load();
      }
    } catch (error) {
      console.error('Error stopping camera:', error);
    }
  }

  async detectPlant() {
    if (!this.selectedImage) {
      alert('Silakan ambil atau unggah gambar terlebih dahulu');
      return;
    }

    this.detectBtn.disabled = true;
    this.detectBtn.textContent = 'Memproses...';

    try {
      // Here you would typically send the image to your backend API
      // const result = await yourDetectionAPI(this.selectedImage, this.plantType);

      // For now, we'll simulate a detection result
      setTimeout(() => {
        alert(
          `Deteksi ${this.plantType} berhasil! Hasil akan ditampilkan di sini.`,
        );

        // Reset button
        this.detectBtn.disabled = false;
        this.detectBtn.textContent = 'Deteksi';

        // Here you would navigate to results page or show results
        // window.location.hash = `#/detection-result/${this.plantType}`;
      }, 2000);
    } catch (error) {
      console.error('Detection error:', error);
      alert('Gagal melakukan deteksi. Silakan coba lagi.');
      this.detectBtn.disabled = false;
      this.detectBtn.textContent = 'Deteksi';
    }
  }
}
