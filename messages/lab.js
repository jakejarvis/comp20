var xhr;

function parse() {
    xhr = new XMLHttpRequest();
    xhr.open("get", "http://messagehub.herokuapp.com/messages.json", true);
    xhr.onreadystatechange = ready;
    xhr.send(null);
}

function ready() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);

        for (i = 0; i < data.length; i++) {
            console.log(data[i]["content"]);

            document.getElementById("messages").innerHTML += '<p><span class="message">' + data[i]["content"] + '<span class="username">' + data[i]["username"] + '</span></span></p>';
        }

    } else if (xhr.readyState == 4 && xhr.status == 500) {
        alert("Sorry, something went wrong!");
    }
}