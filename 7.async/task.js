

let messages = [
  ["zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались."],
  ["zloy-zloy", "У Алеши завтра день рождения."],
  ["zloy-zloy", "Он мой дед. Ему будет 81 год."],
  ["Вы", "LOL"]
];

let newMessages = [];

// newMessages[0] = {};
// newMessages[0].author = messages[0][0];
// newMessages[0].text = messages[0][1];

// newMessages[1] = {};
// newMessages[1].author = messages[1][0];
// newMessages[1].text = messages[1][1];

// newMessages[2] = {};
// newMessages[2].author = messages[2][0];
// newMessages[2].text = messages[2][1];

// newMessages[3] = {};
// newMessages[3].author = messages[3][0];
// newMessages[3].text = messages[3][1];

for(let i = 0; i < messages.length; i++) {
  for(let j = 0; j < messages[i].length - 1; j++) {
    newMessages[i] = {};
    newMessages[i].author = messages[i][j];
    newMessages[i].text = messages[i][j + 1];
  };
  
};
console.log('newMessages - ', newMessages);

// const now = new Date();
// let hours = String(now.getHours()).padStart(2, '0');
// let minutes = String(now.getMinutes()).padStart(2, '0');
// const timeString = `${hours}:${minutes}`;
// console.log(timeString);

