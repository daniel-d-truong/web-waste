const co2PerGoogleSearch = 6.0;
const histCO2GoogleSearch = 4.0;
const key = "co2Used";

chrome.storage.sync.get([key], (result) => {
    alert(result[key]);
    let val = result[key] += co2PerGoogleSearch;
    let obj = {};
    obj[key] = val;
    console.log(obj);
    chrome.storage.sync.set(obj, () => {
        console.log("we did it");
    });
});