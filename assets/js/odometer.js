const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            function odo(params, element) {
                od = new Odometer({
                    el: element,
                    format: "(ddd)",
                    theme: "default",
                });

                element.innerHTML = params;
            }
            odo(2501, document.querySelector(".odometer-1"));
            odo(4700, document.querySelector(".odometer-2"));
            odo(3201, document.querySelector(".odometer-3"));
        }
    });
});

observer.observe(document.getElementById("achievement-section"));
