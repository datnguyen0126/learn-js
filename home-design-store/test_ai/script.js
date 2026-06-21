document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("details-modal");
  const modalContent = document.getElementById("modal-details-content");
  const closeModal = document.querySelector(".close-modal");
  const viewDetailButtons = document.querySelectorAll(".btn-outline");
  const placeOrderButtons = document.querySelectorAll(".place-order-btn");

  viewDetailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".hotel-card");
      const name = card.dataset.name;
      const location = card.dataset.location;
      const price = card.dataset.price;
      const rating = card.dataset.rating;
      const image = card.dataset.image;

      modalContent.innerHTML = `
        <div class="detail-image" style="background-image: url('${image}')"></div>
        <h2>${name}</h2>
        <div class="detail-info"><strong>Location:</strong> ${location}</div>
        <div class="detail-info"><strong>Rating:</strong> ★ ${rating}</div>
        <div class="detail-info"><strong>Price:</strong> $${price} / night</div>
        <p>Experience luxury and comfort at ${name}. Located in the heart of ${location}, it offers unparalleled service and amenities for an unforgettable stay.</p>
      `;

      modal.style.display = "block";
    });
  });

  placeOrderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".hotel-card");
      const name = card.dataset.name;
      const price = card.dataset.price;

      alert(`Order placed for ${name} at $${price} per night!`);
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
