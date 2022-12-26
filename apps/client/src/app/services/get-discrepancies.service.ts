import axios from "axios";
import {apiUrls} from "../utils/api-urls";

class GetDiscrepanciesService {
  static instance: GetDiscrepanciesService;
  static getInstance() {
    if (!GetDiscrepanciesService.instance) {
      return new GetDiscrepanciesService();
    }
    return GetDiscrepanciesService.instance;
  }
  async getDiscrepancies(type: string): Promise<any> {
    const response = await axios.get(`${apiUrls.base}/discrepancies/get?type=${type}`);
    console.log(response);
    return response.data;
  }
}

export default  GetDiscrepanciesService.getInstance();


