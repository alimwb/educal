import axios from 'axios';

// For Local development
// export const baseURL = 'https://fakestoreapi.com/products';

// For Production
// export const baseURL = '/oailm/oailm/api/v1/'
export const baseURL = 'http://localhost:3000/api/v1/';

class UseHttp {
  constructor() {
    this.client = axios.create({
      baseURL,
    });
  }

  get(url, config = null) {
    return this.client.get(url, config);
  }

  post(url, params, config = null) {
    return this.client.post(url, params, config);
  }

  put(url, params) {
    return this.client.put(url, params);
  }

  delete(url, config = null) {
    return this.client.delete(url, config);
  }
}

export default UseHttp;
