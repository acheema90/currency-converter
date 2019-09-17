import axios from 'axios';
import Constants from './Constants';

const ConversionService = {
    getExchangeRates() {
        const req = `${Constants.ENDPOINT}?access_key=${Constants.ACCESS_KEY}&symbols=${Constants.SYMBOLS}`;
        return axios.get(req);
    }
};

export default ConversionService;