(function () {
    const scriptQueue = [
        "assets/js/jquery-3.3.1.min.js",
        "assets/js/popper.min.js",
        "assets/bootstrap/js/bootstrap.min.js",
        "assets/js/imagesloaded.pkgd.min.js",
        "assets/js/isInViewport.jquery.js",
        "assets/js/jquery.magnific-popup.min.js",
        "assets/js/scrolla.jquery.min.js",
        "assets/js/jquery.validate.min.js",
        "assets/js/jquery-validate.bootstrap-tooltip.min.js",
        "assets/js/odometer.min.js",
        "assets/js/owl.carousel.min.js",
        "assets/js/custom.hero.js",
        "assets/js/custom.js"
    ];

    function loadSection(container) {
        const source = container.getAttribute("data-include");
        if (!source) return Promise.resolve();
        return fetch(source)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then((html) => {
                container.innerHTML = html;
            })
            .catch((error) => {
                console.error(`No se pudo cargar la sección ${source}`, error);
                container.innerHTML = '<div class="alert alert-warning">No se pudo cargar esta sección.</div>';
            });
    }

    function loadScriptsSequentially(sources) {
        return sources.reduce((chain, src) => {
            return chain.then(
                () =>
                    new Promise((resolve) => {
                        const script = document.createElement("script");
                        script.src = src;
                        script.onload = resolve;
                        script.onerror = () => {
                            console.error(`No se pudo cargar el script ${src}`);
                            resolve();
                        };
                        document.body.appendChild(script);
                    })
            );
        }, Promise.resolve());
    }

    document.addEventListener("DOMContentLoaded", () => {
        const includeTargets = Array.from(document.querySelectorAll("[data-include]"));
        Promise.all(includeTargets.map(loadSection)).then(() => loadScriptsSequentially(scriptQueue));
    });
})();
