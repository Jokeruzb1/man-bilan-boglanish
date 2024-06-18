function send() {
  let username = document.getElementById("username");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let maktab = document.getElementById("maktab");
  let email = document.getElementById("email");
  sendtelegram(`Ismi: ${username.value}; Telefon raqam: ${phone.value}; Manzil: ${address.value}; Maktabi ${maktab.value}; email ${email.value};`);
}



// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6809320179:AAHM2CABdnVH-Mv0Hw5abCE-aCSizvw98eE"; let chat_id = 6029611486; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };










//api.telegram.org/bot6809320179:AAHM2CABdnVH-Mv0Hw5abCE-aCSizvw98eE/getUpdates