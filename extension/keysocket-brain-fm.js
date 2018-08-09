function onKeyPress(key) {
    if (key === NEXT) {
      simulateClick(document.querySelector('[class^="modules-music-player-css-Skip__skip__"]'));
    } else if (key === PLAY) {
        simulateClick(document.querySelector('[class^="modules-music-player-css-PlayControl__pause__"]'));
    } else if (key === PREV) {
        // N/A
    }
}
