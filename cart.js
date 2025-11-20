//Корзина
let cart_list = document.querySelector(".cart-items-list");
let cart_total = document.querySelector(".cart-total");
let orderBtn = document.querySelector("#orderBtn");
let deleteBtn = document.querySelector("#deleteBtn");
let orderSection = document.querySelector(".order");
let orderForm = document.querySelector(".order-form");
let confirmBtn = document.querySelector(".confirm-order-btn");
function get_item(item) {
  return `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${item.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
          <div class="cart-item-quantity">Кількість: ${item.quantity}</div>
                <div class="cart-item-price" data-price="${item.price}">${
    item.price * item.quantity
  } грн</div>
      </div>
    </div>
  </div>
</div>`;
}

function showCartList() {
  cart_list.innerHTML = "";
  for (let key in cart.items) {
    // проходимося по всіх ключах об'єкта cart.items
    cart_list.innerHTML += get_item(cart.items[key]);
  }
  cart_total.innerHTML = cart.calculateTotal();
}

showCartList();

orderBtn.addEventListener("click", function (event) {
  orderBtn.style.display = "none";
  orderSection.style.display = "block";
});

confirmBtn.addEventListener("click", function () {
  if (orderForm.checkValidity()) {
    alert("Ваше замовлення успішно оформлено!");
    orderForm.reset();
  } else {
    orderForm.reportValidity();
  }
});

deleteBtn.addEventListener("click", function () {
  document.cookie = "cart=; max-age=0; path=/";
  location.reload();
});
