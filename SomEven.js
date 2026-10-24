function somEven(arr){
    let som = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            som += arr[i]
        }
    } 
    return som
}
let getallen = [7, 14, 20, 5, 9, 12]
console.log(somEven(getallen))
