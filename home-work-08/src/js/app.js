let multiplicationTableHolder = document.getElementById('multiplication-table');
let matrixHolder = document.getElementById('matrix');

// multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
// matrixHolder.innerHTML = render(matrix(10));
matrix(10);

/*function multiplicationTable(size) {
    let table = [];
    for (let i = 0; i <= size - 1; i++) {
        table[i] = [];
        for (let j = 0; j <= size; j++) {
            table[i].push(i * j);
        }
    }
    return table;
}*/

/*function matrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            if (matrix[i] === matrix[j]) {
                matrix[i].push(1);
            } else if (i + j === 9) {
                matrix[i].push(2)
            }else {
                matrix[i].push(0);
            }
        }
    }

    // for (let i = 0; i < 10; i++) {
    //     matrix[i] = [];
    //
    //     for (let j = 0; j < i; j++) {
    //
    //         if (j > j / 2) {
    //             matrix[i].push(2);
    //         } else {
    //             matrix[i].push(3);
    //         }
    //
    //     }
    //
    //     for (let j = 10; j > i; j--) {
    //         // matrix[i].push(5);
    //         if (j > j / 2) {
    //             matrix[i].push(6);
    //         } else {
    //             matrix[i].push(8);
    //         }
    //
    //     }
    //
    // }


    console.log(matrix);
    return matrix;

}*/


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