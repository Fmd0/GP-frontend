
const formatByte = (size) => {
    const byteArray = ['B','KB', 'MB', 'GB'];
    let index = 0;
    while (size>=1024) {
        size = size/1024;
        index++;
    }
    return size.toFixed(2)+byteArray[index];
}

const formatPercent = (value) => {
    return (value*100).toFixed(2)+'%'
}

export {formatByte, formatPercent};