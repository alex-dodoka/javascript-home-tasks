const rowTemplate = `В корзине `;
const cases = [`товар`, `товара`, `товаров`];


function addToCart() {
    let strOfItems = +($('#number-of-goods').val());

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

    if (strOfItems > 20) {
        strOfItems %= 10;
        let moreThenTwentyItems = +($('#number-of-goods').val());

        switch (strOfItems) {
            case 1:
                printInHtml(`${rowTemplate} ${moreThenTwentyItems} ${cases[0]}`);
                break;

            case 2:
            case 3:
            case 4:
                printInHtml(`${rowTemplate} ${moreThenTwentyItems} ${cases[1]}`);
                break;

            default:
                printInHtml(`${rowTemplate} ${moreThenTwentyItems} ${cases[2]}`);
        }
    }
    clearInput();
}


function printInHtml(data) {
    $('#print-space').html(data);
}

function clearInput() {
    $('#number-of-goods').val('');
}
