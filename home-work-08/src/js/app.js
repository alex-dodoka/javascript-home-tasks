let multiplicationTableHolder = document.getElementById('multiplication-table');

multiplicationTableHolder.innerHTML = render(multiplicationTable(10));

function multiplicationTable(size) {
    let table = [];

    for (let i = 1; i <= size; i++) {
        let multiplier = i;
        table[i] = [];
        for (let j = 1; j <= 10; j++) {
            let res = multiplier * j;
            table[i].push(res);

        }
    }
    return table;
}

function render(array) {
    let rowsQty = array.length;
    let result = [];
    for (let i = 0; i < rowsQty; i++) {
        if (i === 0) {
            array.splice(i, i);
        } else {
            let row = ['<tr><td>', array[i], '</td></tr>'].join('');
            result.push(row);
        }
    }
    return result.join('');
}