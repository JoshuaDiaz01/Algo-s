const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;

function parensValid(str) 
{    var par = 0    
    for (i = 0; i < str.length; i++){        
        if (str[i] == "("){            
            par += 1        }        
            else if (str[i] == ")"){            
                par -= 1            
        if (par < 0){                
            return false            
        }       
    }        
}    if (par != 0){        
    return false    
}    else {        
        return true    
    }
}
console.log(parensValid(str1))



const two_str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const two_expected1 = true;

const two_str2 = "D(i{a}l[ t]o)n{e";
const two_expected2 = false;

const two_str3 = "A(1)s[O (n]0{t) 0}k";
const two_expected3 = false;

function bracesValid(str) {
    var tracker = []
    const open = ['{', '(', '[']
    const close = ['}', ')', ']']
    for (var i = 0; i < str.length; i++) {
        if (tracker.length == 0 && close.includes(str[i])) {
            return false
        }
        
        if (open.includes(str[i])) {
            tracker.push(str[i])
        }
        else if (close.includes(str[i])){
            var curr = close.indexOf(str[i])
            if (tracker[tracker.length-1] == open[curr]){
                tracker.pop()
            }
            else {
                return false
            }
        }
        else {
            continue
        }   
    }

    if (tracker.length == 0){
        return true
    }
    else {
        return false
    }
}


