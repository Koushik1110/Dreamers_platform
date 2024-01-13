const productsWrapper = document.querySelector(".products_wrapper");

export default function addToCart() {
  productsWrapper.addEventListener("click", (e) => detectProduct(e));
}

function detectProduct(e) {
  if (e.target.classlist.contains("add_to_cart_btn")) {
    const btn = e.target;
  }
}
