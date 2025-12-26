window.onload = () => {
    const bars = document.querySelectorAll('.progress-bar span');

    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
};
