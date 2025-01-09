
function checkSubtring(s: string, target: string):boolean {
    for(let i = target.length; i < s.length; i++){
        const index = i % target.length;
        const a = s[i];
        const b = target[index];

        if(a!== b){
            return false;
        }
    }

    return true;
}

function repeatedSubstringPattern(s: string): boolean {
    for(let i = 1; i < s.length; i++){
        const c = s[i];
        
        if(c !== s[0]){
            continue;
        }

        if( s.length % i === 0 && s.length / i > 1 && checkSubtring(s, s.slice(0, i))){
            return true;
        }
    }

    return false;
};

export default repeatedSubstringPattern;