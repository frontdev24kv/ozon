import getData from "./getData";
import postData from "./postData";
import deleteData from "./deleteData";
import renderGoods from "./renderGoods";

const load = () => {
  const cartOpenBtn = document.getElementById("cart");

  cartOpenBtn.addEventListener("click", () => {
    
    getData().then(data => {
      renderGoods(data)
    })

  })
};
export default load;
