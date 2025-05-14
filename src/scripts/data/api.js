const CONFIG = {
  BASE_URL: 'API_BASE_URL',
  ACCESS_TOKEN_KEY: 'token',
};

const BASE_URL = CONFIG.BASE_URL;
// const TOKEN_KEY = CONFIG.ACCESS_TOKEN_KEY;

// function getToken() {
//   return localStorage.getItem(TOKEN_KEY);
// }

// const ENDPOINTS = {
//   REGISTER: `${BASE_URL}/register`,
//   LOGIN: `${BASE_URL}/login`,
//   STORIES: `${BASE_URL}/stories`,
//   STORIES_GUEST: `${BASE_URL}/stories/guest`,
//   STORY_DETAIL: (id) => `${BASE_URL}/stories/${id}`,
//   NOTIFICATION_SUBSCRIBE: `${BASE_URL}/notifications/subscribe`,
// };

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
