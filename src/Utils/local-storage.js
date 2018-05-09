import axios from 'axios';

export function saveState(state) {
  try {
    localStorage.setItem("LPIN_STATE", JSON.stringify(state));
  } catch (e) {
    // ignore write error for now
  }
}

export function loadState() {
  try {
    const state = localStorage.getItem("LPIN_STATE");
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (e) {
    return null;
  }
}

export function setAuthorizationToken(token) {
  if (token) {
    localStorage.setItem("LPIN_API_TOKEN", token);
    axios.defaults.headers.common.Authorization = "Bearer " + token;
  } else {
    const token = localStorage.getItem("LPIN_API_TOKEN");
    if (token) {
      delete axios.defaults.headers.common.Authorization;
    } else {
      axios.defaults.headers.common.Authorization = "Bearer " + token;
    }
  }
}

