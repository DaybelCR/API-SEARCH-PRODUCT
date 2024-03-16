const axios= require('axios');

const getProductApi=async(skuCode)=>{
const {data}= await axios.get(`https://promart.vtexcommercestable.com.br/api/catalog_system/pub/products/search/${skuCode}`)
return data
}

module.exports=getProductApi;