document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.body.querySelectorAll("p, li, h1, h2, h3, h4, h5, h6");
    textElements.forEach(el => {
        el.innerHTML = el.innerHTML
            .replace(/([ぁ-んァ-ン一-龥])([A-Za-z])/g, '$1<span style="margin: 0 0.1em"></span>$2')
            .replace(/([A-Za-z])([ぁ-んァ-ン一-龥])/g, '$1<span style="margin: 0 0.1em"></span>$2');
    });
});
