const contactProperties = ["name", "email", "tel", "address", "icon"];
const contactOptions = { multiple: true };
const supported = ("contacts" in navigator && "contactsManager" in window);
const contactButton = document.getElementById("contacts-button");

async function getContacts() {
    if (supported) {
        const contacts = await navigator.contacts.select(contactProperties, contactOptions);
        console.log(contacts);
    }
}

contactButton.addEventListener("click", getContacts);