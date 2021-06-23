//g為get
function $g(selector) {
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist; //如果長度是1，就只回傳第一個值，否則回傳整個陣列
}
//c為create
function $c(element) {
    return document.createElement(element);
}

function $cc(parent, element, text) {
    return parent.appendChild(document.createElement(element)).innerText = `${text}`;
}

// function $ccname(parent, element, text) {
//     let el = document.createElement(element);
//     el.innerText = text;
//     parent.appendChild(el);
// }

export { $g, $c, $cc }