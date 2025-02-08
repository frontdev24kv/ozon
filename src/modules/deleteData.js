const deleteData = (id) => {
  return fetch('http://localhost:3000/goods/' + id, {
    method: "DELETE"
  }).then(r=>r.json)
}

export default deleteData;