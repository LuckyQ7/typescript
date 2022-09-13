var messageList = [
    { id: 0, type: "image", sendMessage: "你好呀" },
    { id: 1, type: "audio", sendMessage: "我不好" },
];
function GetMessage(payload) {
    if (typeof payload == "number") {
        return messageList.find(function (item) { return item.id === payload; });
    }
    else {
        return messageList.filter(function (item) { return item.type === payload; });
    }
}
var message = GetMessage(1).sendMessage;
console.info(message);
