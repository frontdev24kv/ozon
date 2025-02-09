const getData = (str) => {

  return fetch(
    `https://test-db-b3999-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${str ? `search=${str}` : ''}`
  ).then(res=>res.json())
 
  
};

export default getData;
