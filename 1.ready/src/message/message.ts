type messageType = "image" | "audio";

type message = {
  id: number;
  type: messageType;
  sendMessage: string;
};

let messageList: message[] = [
  { id: 0, type: "image", sendMessage: "你好呀" },
  { id: 1, type: "audio", sendMessage: "我不好" },
];

function GetMessage(id: number): message;
function GetMessage(type: messageType): message[];
function GetMessage(payload: any): message | message[] | undefined {
  if (typeof payload == "number") {
    return messageList.find((item) => item.id === payload);
  } else {
    return messageList.filter((item) => item.type === payload);
  }
}

let message = GetMessage(1).sendMessage;
let messages = GetMessage("audio");
