// localStorageUtils.js
export function saveUserId(userId) {
    localStorage.setItem('user_id', userId);
  }
  
  export function getUserId() {
    return localStorage.getItem('user_id');
    // const userId = parseInt(localStorage.getItem('userId'));
  }
  
  export function saveToken(token) {
    localStorage.setItem('token', token);
  }
  
  export function getToken() {
    return localStorage.getItem('token');
  }
  