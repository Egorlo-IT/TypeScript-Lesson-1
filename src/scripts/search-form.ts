import { renderBlock } from "./lib.js";
import { dateFormater } from "./dateFormater.js";

export function renderSearchFormBlock(checkin: Date, checkout: Date) {
  const minDate = new Date();
  let maxDateFormatted: string;

  minDate.setDate(checkin.getDate() - 1);

  if (+checkin.getMonth() === 11) {
    const maхDate = new Date(checkin.getFullYear() + 1, 0, 1);
    maxDateFormatted = dateFormater(maхDate, "-");
  } else {
    const checkinMaх = new Date(checkin.getFullYear(), checkin.getMonth() + 2);
    maxDateFormatted = dateFormater(checkinMaх, "-");
  }

  const checkinDefaulFormatted = dateFormater(checkin, "-");
  const checkoutDefaulFormatted = dateFormater(checkout, "-");
  const minDateFormatted = dateFormater(minDate, "-");

  renderBlock(
    "search-form-block",
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${checkinDefaulFormatted} min=${minDateFormatted} max=${maxDateFormatted} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${checkoutDefaulFormatted}  min=${minDateFormatted} max=${maxDateFormatted} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
