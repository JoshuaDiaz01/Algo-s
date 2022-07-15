const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello     world     ";
const expected2 = "hello     world";

function trim(str) {

    //const list = str.split("");
    const list = str;
    console.log(str[5]);
    for (var i = 0; i < list.length; i++){
        if (list[i] != " "){
            var first = i;
            break;
        }
    }
    for (var j = list.length - 1; j > -1; j--){//this will start from the end 
        if (list[j] != " "){
            var last = j;
            break;
        }
    }

    const newString = str.slice(first, last+1); //slice will take in only the first and last values

    console.log(first)
    console.log(last)

    return newString;

}




const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

function isAnagram(s1, s2) {
    let string1 = s1.trim();
    let string2 = s2.trim();
    if (string1.length != string2.length){
        return false;
    }
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    let list1 = string1.split("");
    let list2 = string2.split("");

    list1 = list1.sort(); 
    list2 = list2.sort();

    string1 = list1.join("");
    string2 = list2.join("");

    if (string1 == string2){
        return true;
    } else {
        return false;
    }

}