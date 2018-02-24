const rowTemplate = `В корзине `;
const cases = [`товар`, `товара`, `товаров`];


function addToCart() {
    let strOfItems = Math.floor($('#number-of-goods').val());
    strOfItems %= 100;

    if (strOfItems > 19) {
        strOfItems %= 10;
    }

    switch (strOfItems) {
        case 1:
            printInHtml(`${rowTemplate} ${strOfItems} ${cases[0]}`);
            break;

        case 2:
        case 3:
        case 4:
            printInHtml(`${rowTemplate} ${strOfItems} ${cases[1]}`);
            break;

        default:
            printInHtml(`${rowTemplate} ${strOfItems} ${cases[2]}`);
    }
    clearInput();
}


function printInHtml(data) {
    $('#print-space').html(data);
}

function clearInput() {
    $('#number-of-goods').val('');
}
