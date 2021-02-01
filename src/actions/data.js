import _axios from "./_axios";


export const fetchData = async ({id}) => {
  const result = await _axios.get(`http://devapi.aimmeart.com/aimme/api/v2/detail/${id}`);

  return result;
}
