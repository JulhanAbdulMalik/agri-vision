import { showToast } from '../utils/utils';

const CONFIG = {
  BASE_URL: 'https://api-agrivision.up.railway.app',
  // ACCESS_TOKEN_KEY: 'token',
};

const BASE_URL = CONFIG.BASE_URL;
// const TOKEN_KEY = CONFIG.ACCESS_TOKEN_KEY;

// function getToken() {
//   return localStorage.getItem(TOKEN_KEY);
// }

const ENDPOINTS = {
  EDUCATIONS: `${BASE_URL}/educations`,
  EDUCATION_DETAIL: (id) => `${BASE_URL}/educations/${id}`,
  DETECTIONS: `${BASE_URL}/detections`,

  // DETECTION_DETAIL: (id) => `${BASE_URL}/detections/${id}`,
};

// async function getNotes() {
//   try {
//     const response = await fetch(ENDPOINTS.NOTES);
//     const responseJson = await response.json();

//     renderAllNotes(responseJson.data);
//   } catch (error) {
//     showToast('error', 'Note not found!');
//   } finally {
//     hideLoading(loadingSpinner);
//   }
// }

async function getAllEducations() {
  try {
    const response = await fetch(ENDPOINTS.EDUCATIONS);
    const responseJson = await response.json();

    return responseJson.data.educations;
  } catch (error) {
    showToast('error', 'Education not found!');
  }
}

export { getAllEducations };
