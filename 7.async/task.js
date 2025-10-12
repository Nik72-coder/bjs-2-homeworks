
// let alarmCollection = [];
// let id;

// const AlarmClock = {
//     constructor: alarmCollection,
//     intervalId: id
// }
// const addClock = {

// }

let messages = [
  ["zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались."],
  ["zloy-zloy", "У Алеши завтра день рождения."],
  ["zloy-zloy", "Он мой дед. Ему будет 81 год."],
  ["Вы", "LOL"]
];

let newMessages = [];

for(let i = 0; i < messages.length; i++) {
    newMessages[i] = {};
    for(let j = 0; j < 1; j++) {
        newMessages[0].author = messages[i][j];
        newMessages[0].text = messages[i][j + 1];
    };
    console.log('newMessages - ', newMessages, typeof(newMessages));
    messages.push(newMessages)
};
console.log(messages);