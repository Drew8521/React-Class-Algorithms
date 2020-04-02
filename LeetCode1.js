/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.replace(" ", "")==""){
        return 0;
    }
    s = s.replace(/\s+$/g, "");
    let len = s.length;
    let word = "";
    for (let i = len; i >= 0; i--) {
        if (s.substring(i,i+1)==" ") {
            return word.length;
        }
        word += s.substring(i,i+1);
    } return s.length;
};
