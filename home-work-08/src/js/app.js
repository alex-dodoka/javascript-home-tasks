let multiplicationTableHolder = document.getElementById('multiplication-table');
let matrixHolder = document.getElementById('matrix');
let pascalTriangleHolder = document.getElementById('pascal-triangle');

multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
matrixHolder.innerHTML = render(matrix(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
    let table = [];
    for (let i = 1; i < size; i++) {
        table[i] = [];
        for (let j = 1; j <= size; j++) {
            table[i].push(i * j);
        }
    }
    return table;
}

function matrix(size) {
    let matrix = [];
    for (let j = 1; j <= size; j++) {
        let rowMember = [];
        for (let i = 1; i <= size; i++) {
            if (i > j && i < (size + 1) - j) {
                rowMember.push(3);
            }
            else if (i === j) {
                rowMember.push(1);
            }
            else if (i < j && i > (size + 1) - j) {
                rowMember.push(5);
            }
            else if (i === (size + 1) - j) {
                rowMember.push(2);
            }
            else if (i < j) {
                rowMember.push(6);
            }
            else {
                rowMember.push(4);
            }
        }
        matrix.push(rowMember);
    }
    return matrix;
}

function pascal(size) {
    let triangle = [];
    for (let i = 0; i < size; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === i) {
                triangle[i].push(1);
            }
            else {
                let pair = (triangle[i - 1][j - 1] ? triangle[i - 1][j - 1] : 0) + (triangle[i - 1][j] ? triangle[i - 1][j] : 0);
                triangle[i].push(pair);
            }
        }
    }
    return triangle
}

function render(array) {
    let rowsQty = array.length;
    let result = [];
    for (let i = 0; i < rowsQty; i++) {
        if (i === rowsQty[i]) {
             array[i].splice(i,i);
        } else {
            let row = ['<tr><td>', array[i], '</td></tr>'].join('');
            result.push(row);
        }
    }
    return result.join('');
}



