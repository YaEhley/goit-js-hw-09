const STORAGE_KEY = 'user-data';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const data = {
        email,
        message,
    };

    console.log(data);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}

function onFormInput() {
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const data = {
        email,
        message,
    };

    saveToLocalStorage(STORAGE_KEY, data);
}

function saveToLocalStorage(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
}

function loadFromLs(key) {
    const zip = localStorage.getItem(key);
    // try {
    //     return JSON.parse(zip);
    // } catch {
    //     return zip;
    // }
    if (zip !== null) {
        return JSON.parse(zip);
    } else {
        return zip;
    }
}

function init() {
    const data = loadFromLs(STORAGE_KEY) || {};
    form.elements.email.value = data.email || "";
    form.elements.message.value = data.message || "";
}

init();