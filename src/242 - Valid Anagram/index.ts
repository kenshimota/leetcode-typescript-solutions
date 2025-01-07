function isAnagram(s: string, t: string): boolean {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of t) {
        const count = map.get(char);

        if (count === undefined || count <= 0) {
            return false;
        }

        map.set(char, count - 1);
        if(count - 1 === 0){
            map.delete(char);
        }
    }

    return map.size === 0;
};

export default isAnagram;