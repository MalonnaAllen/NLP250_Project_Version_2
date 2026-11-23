// Query selectors for the credit category headings.
const creditHeadings = document.querySelectorAll(".credit-card h2");

creditHeadings.forEach((heading) => {
  heading.setAttribute("role", "button");
  heading.setAttribute("tabindex", "0");
  heading.setAttribute("aria-expanded", "false");

  const toggleCreditCard = () => {
    const creditCard = heading.closest(".credit-card");
    creditCard.classList.toggle("active");
    heading.setAttribute(
      "aria-expanded",
      creditCard.classList.contains("active").toString(),
    );
  };

  heading.addEventListener("click", toggleCreditCard);
  heading.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCreditCard();
    }
  });
});
