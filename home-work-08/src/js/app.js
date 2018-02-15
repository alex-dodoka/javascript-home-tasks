let multiplicationTableHolder = document.getElementById('multiplication-table');

multiplicationTableHolder.innerHTML = render(multiplicationTable(10));

function multiplicationTable(size) {
    let table = [];
    for (let i = 2; i <= size; i++) {
        let multiplier = i;

        for (let j = 1; j <= 10; j++) {
            let res = multiplier * j;
            table.push(res);
        }
    }
    return table;
}

function render(array) {
    let rowsQty = array.length;
    let result = [];
    for (let i = 0; i < rowsQty; i++) {
        let row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }
    return result.join('');
}
