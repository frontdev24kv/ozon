import getData from "./getData"
import renderGoods from "./renderGoods"
import { searchFilter } from "./filters"
import { debounce } from "./helpers"


export const search = () => {

  const searchInput = document.querySelector('.search-wrapper_input')

  const debouncedSearch = debounce((event) => {
    
    getData().then(data => {
      renderGoods(searchFilter(data, event.target.value))
      
    })
  },1000)
  
  searchInput.addEventListener('input', debouncedSearch)

}