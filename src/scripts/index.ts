import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";

const checkinDefault = new Date();
const checkoutDefault = new Date();

checkinDefault.setDate(checkinDefault.getDate() + 1);
checkoutDefault.setDate(checkinDefault.getDate() + 2);

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Chica", "/img/avatar.png", 1);
  renderSearchFormBlock(checkinDefault, checkoutDefault);
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
