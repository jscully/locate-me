import axios from "axios";
import { LocationDetail } from "../utils/model/LocationDetail";

const endpoint = `http://ip-api.com/json/`;

export class LocationAPI {
  static getLocationDetails() {
    return axios.get<LocationDetail>(endpoint);
  }

  static getLocationDetailsByIp(ipAddress: string) {
    return axios.get<LocationDetail>(endpoint + ipAddress);
  }

  static getApiKey() {
    return "API key goes here";
  }
}
