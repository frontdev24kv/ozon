import getData from "./getData";
import postData from "./postData";
import deleteData from "./deleteData";
const second = () => {
  const cartOpenBtn = document.getElementById("cart");

  cartOpenBtn.addEventListener("click", () => {
    postData().then(data=>{
      console.log(data)
    
      getData().then(data=>console.log(data))
      console.log("ok");
      
    })
  })
};
export default second;
