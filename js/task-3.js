function getElementWidth(content, padding, border) {
    // Convert values to numbers
    const contentValue = parseFloat(content);
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);
    
    // Calculate width
    const elementWidth = contentValue + paddingValue * 2 + borderValue * 2;
    
    // Return width
    return elementWidth;
}

//Tests
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 60+12*2+8.5*2 = 60+24+17 = 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
