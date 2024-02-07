const STORAGE_KEY = 'user-data';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const data = {
        email,
        message,
    };

    console.log(data);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}

function onFormInput() {
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const data = {
        email,
        message,
    };

    saveTols(STORAGE_KEY, data);
}

function saveTols(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
}

function loadFromLs(key) {
    const zip = localStorage.getItem(key);
    try {
        return JSON.parse(zip);
    } catch {
        return zip;
    }
}

function init() {
    const data = loadFromLs(STORAGE_KEY) || {};
    form.elements.email.value = data.email || "";
    form.elements.message.value = data.message || "";
}

init();