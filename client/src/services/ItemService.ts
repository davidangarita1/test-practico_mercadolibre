import axios from 'axios';

import {API_URL} from "../utils/connection";
import {payloadGet} from "../utils/payloadBase";

class ItemService {
    getItemList(search: string) {
        return axios.request({...payloadGet, url: `${API_URL}/items?q=${search}` });
    }

    getItemDetail(id: string) {
        return axios.request({...payloadGet, url: `${API_URL}/items/${id}`});
    }
}
export default new ItemService();

