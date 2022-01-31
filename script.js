const accordianItemHeaders = document.querySelectorAll(".Accordian-item-header");

accordianItemHeaders.forEach(accordianItemHeader => {
    accordianItemHeader.addEventListener("click", event => {
        accordianItemHeader.classList.toggle("active");
    });
});