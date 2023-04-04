const modalOpen = document.querySelector(".modal-open");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const content = document.querySelector(".modal-content");
const form = document.querySelector(".form-body");

modalOpen.addEventListener("click", function() {
    modal.classList.add("active");
    content.classList.add("active");
})

closeModal.addEventListener("click", function() {
    modal.classList.remove("active");
    content.classList.remove("active");
})

modal.addEventListener("click", function(e) {
    const target = e.target;
    if(target.matches("section.modal.active")) {
        modal.classList.remove("active");
        content.classList.remove("active");
    }
})


form.addEventListener("submit", function(e) {
    e.preventDefault();
   let submit = prompt("Are You sure you want to submit? Type 'yes' to submit");

   if(submit === "yes") {
    e.target.submit()
   }
})
