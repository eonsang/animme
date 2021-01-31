import _axios from "./_axios";


export const fetchData = async () => {
  return await _axios.get('/json/api_20210129.json');
}
