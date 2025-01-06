function strStr(haystack: string, needle: string): number {
    let counted = 0;

    for(let i = 0; i <= haystack.length; i++){
        if(counted === needle.length) {
            return i - counted;
        }
        
        const c = haystack[i];

        if(c === needle[counted]){
            counted += 1;
            continue;
        }

        i = i - counted ;
        counted = 0;
    }
    
    return -1;
};


export default strStr;