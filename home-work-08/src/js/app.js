let multiplicationTableHolder = document.getElementById('multiplication-table');
let matrixHolder = document.getElementById('matrix');

// multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
// matrixHolder.innerHTML = render(matrix(10));

function multiplicationTable(size) {
    let table = [];
    for (let i = 0; i <= size - 1; i++) {
        table[i] = [];
        for (let j = 0; j <= size; j++) {
            table[i].push(i * j);
        }
    }
    return table;
}

function matrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            if (matrix[i] === matrix[j]) {
                matrix[i].push(1);
            } else {
                matrix[i].push(0);
            }
        }


    }
    console.log(matrix);
    return matrix;

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