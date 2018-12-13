function sortAlgorithm(list, order) {
    if(order === 'asc') {
        return ascending(list);
    }
    else if(order === 'desc') {
        return descending(list,order);
    }
    else {
        return list;
    }
}

function ascending(list) {
    
        let size = list.length;
        for(let index = 0; index < size; index++) {
            for(let newIndex = 0; newIndex < size - index; newIndex++) {
                if(list[newIndex] > list[newIndex + 1]) {
                    var max = list[newIndex];
                    list[newIndex] = list[newIndex + 1];
                    list[newIndex + 1] = max;

                }
            }
        }
        return list;
    }

function descending(list) {
        let size = list.length;
        for(let index = 0; index < size; index++) {
            for(let newIndex = 0; newIndex < size - index; newIndex++) {
                if(list[newIndex] < list[newIndex + 1]) {
                    var max = list[newIndex];
                    list[newIndex] = list[newIndex + 1];
                    list[newIndex + 1] = max;

                }
            }
        }
        return list;
}

console.log(sortAlgorithm([10,11,1,3,4,6,87,9,3,1], 'desc'));