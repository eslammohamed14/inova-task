import axios from 'axios';

class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: 'https://api.yelp.com/v3',
      headers: {
        Authorization:
          'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx',
      },
    });
  }

  getBusinessesList(term = '', location = 'san jose', limit = 50) {
    return this.http.get(
      `/businesses/search?location=${location}&limit=${limit}&term=${term}`,
    );
  }

  getBusinessInfo(id) {
    return this.http.get(`/businesses/${id}`);
  }
}

export default new ApiService();
