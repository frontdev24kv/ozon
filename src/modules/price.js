const getPrice = () => {
  const minPriceInput = document.querySelector('form input#min')
  const maxPriceInput = document.querySelector('form input#max')
  
  let minPrice;
  let maxPrice ;

  [minPriceInput, maxPriceInput].forEach(item => {
    item.addEventListener('input', () => {
      minPrice = minPriceInput.value ? minPriceInput.value : 0;
      maxPrice = maxPriceInput.value ? maxPriceInput.value : 9999;
    })
  })

  console.log(minPrice, maxPrice);
  
}

export default getPrice