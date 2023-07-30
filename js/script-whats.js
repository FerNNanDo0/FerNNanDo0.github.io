// codigos para icone whatsapp
document.getElementById("whatswidget-conversation").style.display = "none";
document.getElementById("whatswidget-conversation").style.opacity = "0";

var button = document.getElementById("whatswidget-button");
button.addEventListener("click", openChat);
var conversationMessageOuter = document.getElementById("whatswidget-conversation-message-outer");
conversationMessageOuter.addEventListener("click", openChat);
var chatOpen = !1;

function openChat() {
    0 == chatOpen ? (
        document.getElementById("whatswidget-conversation").style.display = "block",
        document.getElementById("whatswidget-conversation").style.opacity = 100, chatOpen = !0,
        document.getElementById("whatswidget-conversation-message-outer").style.display = "none"
    ) : (
        document.getElementById("whatswidget-conversation").style.opacity = 0,
        document.getElementById("whatswidget-conversation").style.display = "none", chatOpen = !1
    )
}