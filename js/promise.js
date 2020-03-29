function postData(formData) {

    return new Promise(function (resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                resolve();
            } else if (request.readyState === 4 && request.status == 200) {
                resolve();
            } else {
                reject();
            }
        });
    })
}

postData(formData)
    .then(() => statusMessage.innerHTML = message.loading)
    .then(() => statusMessage.innerHTML = message.succes)
    .catch(() => statusMessage.innerHTML = message.failure)
    .then(() => {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    })