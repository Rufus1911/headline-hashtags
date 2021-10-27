function getHashtags(headline){
    const ary = headline.split(" ");
    let hTag = "#";
    const returnAry = ["", "", ""];
    if (ary.length < 4){
        returnAry.splice(0, 3);
        for ( i = 0; i < ary.length; i++){
            returnAry.push(hTag.concat(ary[i]).toLowerCase());
        }
        return returnAry;
    }
    else {
        for (let i = 0; i < ary.length; i++){
            if (ary[i].length > returnAry[0].length){ //if current element is the new largest, push everything in returnAry over 1 and replace returnAry[0]
                returnAry.reverse(); //flip array around
                returnAry.shift(); //remove the front of the array (shortest string)
                returnAry.push(ary[i]); //add ary[i] (longest string) to back of array
                returnAry.reverse(); //flip array back
                //the array has now had its smallest member removed and a new largest member inputted in the first slot, pushing the others over 1
            }
            else if (ary[i].length > returnAry[1].length && ary[i].length <= returnAry[0].length){
                returnAry[2] = returnAry[1];
                returnAry[1] = ary[i];
            }
            else if (ary[i].length > returnAry[2].length && ary[i].length <= returnAry[1].length){
                returnAry[2] = ary[i];
            }
            else{
                continue;
            }
        }
        for ( i = 0; i < returnAry.length; i++){
            returnAry[i] = hTag.concat(returnAry[i]).toLowerCase();
        }
        return returnAry;
    }
}

console.log(getHashtags("Woman in Thailand's high-rise cuts rope holding painters"));