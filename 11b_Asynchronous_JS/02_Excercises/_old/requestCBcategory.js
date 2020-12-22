const getCategoryCB = (callback) =>{
    const request1 = new XMLHttpRequest();
    //let result = "";
    request1.addEventListener('readystatechange', (evt) => {
        if (evt.target.readyState === 4 && evt.target.status === 200) {
            let data1 = JSON.parse(evt.target.responseText);
            console.log(`log request ${data1.name}`);
            if (typeof data1 == "undefined") {
                callback("has to be updated");
            } else {
                callback(data1.name);
            }
        } else if (evt.target.readyState === 4) {
            console.log(`Error occured with status ${evt.target.status}`);
        }
    });

    request1.open('GET', categoryURL);
    request1.send();

    //return result;
}

