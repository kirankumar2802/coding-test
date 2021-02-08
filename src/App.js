import { http } from "./utils/http";
import { ShopUI } from "./components/Shop/ShopUI";
import { CartUI } from "./components/Cart/CartUI";

import { Store } from "./utils/storage";
//Get Products on DOM load

export const getProducts = function () {
  http
    .get("./store/data.json")
    .then((data) => {
      const items = data.items.map((item) => {
        item.id = Math.random().toString(36).substr(2, 9);
        return item;
      });
      Store.clearItemsFromStorage("items");
      Store.initStorage(items, "items");
      ShopUI.showItems(items);
      CartUI.show();
    })
    .catch((err) => console.log(err));
};

export const addToCart = function (e) {
  if (e.target.classList.contains("shop__item__submit")) {
    const id = e.target.dataset.id;
    const item = Store.getItemFromStorage(id, "items");
    CartUI.add(item, 1);
    CartUI.show();
    CartUI.updateCartSummary();
  }
};
export const cartUpdateHandler = function (e) {
  const id = e.target.dataset.id;
  if (e.target.classList.contains("shop__table__remove-item")) {
    CartUI.removeItem(id);
    CartUI.show();
    CartUI.updateCartSummary();
  }

  if (e.target.getAttribute("id") === "decrease") {
    let inputVal = document.querySelector("#number").value;
    if (inputVal == 1) {
      console.log("empty");
      CartUI.removeItem(id);
    } else {
      CartUI.removeItemWithQuantity(id, 1);
    }
    CartUI.show();
    CartUI.updateCartSummary();
  }
  if (e.target.getAttribute("id") === "increase") {
    const item = Store.getItemFromStorage(id, "items");

    CartUI.add(item, 1);
    CartUI.show();
    CartUI.updateCartSummary();
  }
};
