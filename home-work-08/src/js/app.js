

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


