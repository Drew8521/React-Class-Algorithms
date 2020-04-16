/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
    let freq = getFrequency(s);
    return freq;
}
function getFrequency(s) {
    let frequency = {};
    for (let i=0; i<s.length;i++) {
        let c = s.charAt(i);
        if (frequency[c]) {
           frequency[c]++;
        } else {
           frequency[c] = 1;
        }
    }
    
    let unique = [];
    for(value in frequency) {
        unique.push(value);
    }

    function compareFrequency(a, b) {
        return frequency[b] - frequency[a];
    }
    unique.sort(compareFrequency);
    
    let str="";
    for (let i = 0; i < unique.length; i++) {
        for (let j = 0; j < frequency[unique[i]]; j++) {
            str += unique[i];
        }
    } return str;
};

function getFrequencyArr(freq) {
    let arr = {};
    for (let i = 0; i < freq.length; i++) {
        arr[i] = freq[i];
    } 
    console.log(arr);
    return arr;
}

