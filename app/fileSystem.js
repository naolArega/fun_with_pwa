const openFileButton = document.getElementById("openfile-button");

openFileBtn.addEventListener("click", async () => {
    cons[handle] = await window.showOpenFilePicker();
    const file = await handle.getFile();
    console.log(file);
});

const saveFileButton = document.getElementById("fileSaveButton");

saveFileButton.addEventListener("click", () => {
    const textFile = new File(["hello world this is pwa"], "hello.txt", {
        type: "text/plain",
    });
    const handle = await window.showOpenFilePicker();
    const writable = await handle.createWritable();
    await writable.write(textFile);
    await writable.close();
});