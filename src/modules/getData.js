const getData = () => {
  return fetch(
    "https://test-db-b3999-default-rtdb.europe-west1.firebasedatabase.app/goods.json"
  ).then((r) => r.json());
};

export default getData;
