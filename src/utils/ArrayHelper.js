
export const removeDuplicates = (myArr, prop) => {
	// remove duplicate value from more than one array and return single array
	return myArr.filter(function(obj, pos, arr)  {
	    return arr.map(function(mapObj){ 
	        return mapObj[prop];
	    }).indexOf(obj[prop]) === pos;
	});
}

export const sortListArray = (listArray, orderByKey) => {
    // sort array in ascending order
    const sorted = []; 
    if(typeof listArray !== "undefined"){
        sorted = [...listArray].sort((a, b) => b[orderByKey] - a[orderByKey]);
    }
    return sorted
};
export const filteredListArray = (listArray, filterByKey, searchKey="") => {
    // filter array with provided column and it's value
    if(searchKey == ""){ return listArray; }
    return listArray.filter(
      (list) => list[filterByKey].toLowerCase().includes(searchKey)
    );
    return listArray;
}