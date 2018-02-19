let rowTemplate = "В корзине";

function addToCart() {
    let strOfItems = Math.floor($('#number-of-goods').val());

    if (typeof strOfItems !== `number`) {
        printInHtml(`Введите число!`);
    }
    if (strOfItems === 1) {
        printInHtml(`${rowTemplate} ${strOfItems} товар`);
    } else if (strOfItems >= 2 && strOfItems <= 4) {
        printInHtml(`${rowTemplate} ${strOfItems} товарa`);
    } else {
        printInHtml(`${rowTemplate} ${strOfItems} товаров`);
    }


    clearInput();
}


function printInHtml(data) {
    $('#print-space').html(data);
}

function clearInput() {
    $('#number-of-goods').val('');
}