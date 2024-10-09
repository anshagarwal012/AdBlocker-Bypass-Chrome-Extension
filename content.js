const checkAdBlockerMessage = () => {
    const titleElement = document.querySelector('#title span span');
    if (titleElement && titleElement.textContent.includes('Ad blockers violate')) {
        location.reload();
    }
};
setInterval(checkAdBlockerMessage, 3000);