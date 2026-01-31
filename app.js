function sendMessage() {
    var username = document.getElementById("username").value;
    var room = document.getElementById("room").value;
    var message = document.getElementById("message").value;

    database.ref(room).push({
        user: username,
        msg: message
    });

    document.getElementById("message").value = "";
}

function loadMessages() {
    var room = document.getElementById("room").value;

    database.ref(room).on("child_added", function(snapshot) {
        var data = snapshot.val();
        var messagesDiv = document.getElementById("messages");
        messagesDiv.innerHTML += `<p><b>${data.user}:</b> ${data.msg}</p>`;
    });
}

document.getElementById("room").addEventListener("change", loadMessages);
