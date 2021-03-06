if (!window.Puller) {
    throw "This extension must be initialized after Puller.";
} else if (window.Alpine) {
    throw "This extension must be initialized before Alpine.";
}
document.addEventListener('alpine:init', () => {
    window.Alpine.store('errors', {});
    window.Alpine.store('status', 0);
    window.Alpine.store('error_message', '');
    window.Alpine.magic('message', () => (...attrs) => {
        return window.Puller.message(...attrs);
    });
    // window.Alpine.magic('await', () => (...attrs) => {
    //     return new Promise();
    // });
    window.Puller.onError(({detail}) => {
        window.Alpine.store('errors', detail.errors);
        window.Alpine.store('status', detail.status);
        window.Alpine.store('error_message', detail.message);
    });

    window.Puller.channel('alpine', ({name, detail}) => {
        let alpine = /^([^.]+)\.?([^.]+)?$/.exec(name);
        let storeName = alpine ? alpine[1] : null;
        let store = Alpine.store(storeName);
        if (!store && !alpine[2]) {
            store = Alpine.store(storeName, {});
            store = Alpine.store(storeName);
        }
        else if (!store && alpine[2]) {
            Alpine.store(storeName, {[alpine[2]]: null});
            store = Alpine.store(storeName);
        }
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
});
