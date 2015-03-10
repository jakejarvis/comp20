function parse() {
    request = new XMLHttpRequest();
    request.open("get", "http://messagehub.herokuapp.com/messages.json", true);
    request.onreadystatechange = ready;
    request.send(null);
}

function ready() {
    if (request.readyState == 4 && request.status == 200) {
        data = JSON.parse(request.responseText);

        for (i in data) {
            document.getElementById("messages").innerHTML += '<p><span class="message">' + data[i]["content"] + '<span class="username">' + data[i]["username"] + '</span></span></p>';
        }

    } else if (request.readyState == 4 && request.status == 500) {
        alert("Sorry, something went wrong!");
    }
}