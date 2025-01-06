function findTheDifference(s: string, t: string): string {
    let letters = [];
    const map: Map<string, number> = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of t) {
        const count = map.get(char) || 0;

        if (count <= 0) {
            letters.push(char);
            continue;
        }

        map.set(char, count - 1);
    }

    for(const [c, value] of map){
        if(value === 0) {
            continue;
        }
        letters.push(c);
    }

    return letters.join("");    
};


export default findTheDifference;