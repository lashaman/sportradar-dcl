import {DiscrepancyTypes} from "../../../../api/src/app/spr-dcl/discrepancy-types.enum";
import axios from "axios";

class GetDiscrepanciesService {
  async getDiscrepancies(type: DiscrepancyTypes): Promise<any[]> {
    const response = await axios.get(`http://localhost:3333/discrepancies?type=${type}`);
    return response.data;
  }
}

export default new GetDiscrepanciesService();
