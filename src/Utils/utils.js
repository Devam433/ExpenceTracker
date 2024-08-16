export function parseToInt(obj) { //data must be an object

    if (Object.prototype.toString.call(obj) === '[object Object]') {//checks if object or not
        for(const key in obj) {
            if(typeof obj[key]==="string" && !isNaN(obj[key])) {
                obj[key] = parseInt(obj[key],10);
            }
        }
        return obj;
    } else {
        console.error('This is not an object.');
    }
}