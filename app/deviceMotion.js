let location;

function getLocation() {
    navigator.geolocation.getCurrentPosition(positon => {
        console.log(positon);
        location = position;
    });
}

function getOrientation(e) {
    console.log(e);
}

window.addEventListener("devicemotion", getOrientation(e));