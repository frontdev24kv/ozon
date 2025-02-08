const postData = () => {
  return fetch("https://test-db-b3999-default-rtdb.europe-west1.firebasedatabase.app/goods.json"
    , {
    method: 'POST',
    body: JSON.stringify( {
      "id": "24",
      "title": "Игра Resident Evil 3 (PS4 Sony)",
      "price": 3000,
      "sale": true,
      "img": "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      "category": "Игры и софт"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
}

export default postData