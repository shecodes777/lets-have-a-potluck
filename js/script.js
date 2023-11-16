const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;

  if (guest !== "") {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guest = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guest.length;

  if (guest.length === 8) {
    addGuestButton.classList.add("hide");
    guestFull.classList.remove("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
  }
};

const assignItems = function () {
  const potlockItems = [
    "Mash potatoes",
    "Mac n cheese",
    "Stuffing",
    "Roast Turkey",
    "Salad",
    "Apple Pie",
    "Bruschetta",
    "Finger Sandwiches",
    "Mini Ice Cream Cakes",
    "Lasagna",
    "Skewers",
    "Sushi",
  ];

  const allGuest = document.querySelectorAll(".guest-list li");

  for (let guest of allGuest) {
    let randomPotlockIndex = Math.floor(Math.random() * potlockItems.length);
    let randomPotlockItem = potlockItems[randomPotlockIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotlockItem}.`;
    assignedItems.append(listItem);

    potlockItems.splice(randomPotlockIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
