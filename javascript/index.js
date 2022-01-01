if (!window.Puller) {
    throw "This extension must be initialized after Puller.";
} else if (!window.Alpine) {
    throw "This extension must be initialized after Alpine.";
}

Alpine.magic('now', () => {
    return (new Date).toLocaleTimeString()
})

window.Puller.channel('alpine', ({name, detail}) => {
    let alpine = /^([^.]+)\.?([^.]+)?$/.exec(name);
    let store = alpine ? Alpine.store(alpine[1]) : null;
    if (alpine && alpine[2] && store) {
        if (typeof store[alpine[2]] === "function") {
            store[alpine[2]](detail);
        } else {
            store[alpine[2]] = detail;
        }
    } else if (alpine && store) {
        if (typeof store === "function") {
            store(detail);
        } else {
            Alpine.store(alpine[1], detail);
        }
    }
});
