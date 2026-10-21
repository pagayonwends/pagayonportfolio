document.addEventListener("DOMContentLoaded", function () {
    console.log("wendy portfolio ready");

    const submitBtn = document.querySelector("button");
    if (submitBtn) {
        submitBtn.addEventListener("click", function () {
            console.log("form submit triggered");
        });
    }
});