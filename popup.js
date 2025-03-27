async function sayHello() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const pass = generatePassword();
            alert('Your New Password: ');
            alert(pass);
            
        }
    });
}
document.getElementById("myButton").addEventListener("click", sayHello);