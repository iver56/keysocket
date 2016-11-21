function onKeyPress(key) {
    if (key === NEXT) {
        simulateClick(document.querySelector('#skip_button'));
    } else if (key === PLAY) {
        simulateClick(document.querySelector('#player_circle'));
    } else if (key === PREV) {
        // N/A
    }
}
