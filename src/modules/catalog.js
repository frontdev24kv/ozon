import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";


const catalog = () => {

  const catalogBtn = document.querySelector('.catalog-button button')
  const catalogModal = document.querySelector('.catalog');
  const catalogItems = document.querySelectorAll('.catalog li')
  

  let isOpen = false

  catalogBtn.addEventListener('click', () => {
    isOpen = !isOpen
    catalogModal.style.display = `${isOpen ? 'flex' : ''}`
  })

  catalogItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent
      getData(text).then(data => {
        renderGoods(categoryFilter(data, text))
      })
    })
  })

}

export default catalog;