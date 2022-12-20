import axios from "axios";

class GetDiscrepanciesService {
  static instance: GetDiscrepanciesService;
  static getInstance() {
    if (!GetDiscrepanciesService.instance) {
      return new GetDiscrepanciesService();
    }
    return GetDiscrepanciesService.instance;
  }
  async getDiscrepancies(type: string): Promise<any> {
    const response = await axios.get(`http://localhost:3333/api/discrepancies/get?type=${type}`);
    return response.data;
  }
}

export default  GetDiscrepanciesService.getInstance();
