// get input value by id
function getValueById(inputValueId){
    const inputText = document.getElementById(inputValueId).value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

// set value by id
function setValueById(valueId, value){
    const fieldValue = document.getElementById(valueId);
    fieldValue.innerText = value;
}

// calculate triangle
function calculateTriangleArea(){
    const base = getValueById("triangle-base");
    const height = getValueById("triangle-height");

    const value = 0.5 * base * height;
    setValueById("triangle-area", value);
}

// calculate rectangle
function calculateRectangularArea(){
    const width = getValueById("rectangular-width");
    const length = getValueById("rectangular-length");

    const value = width * length;
    setValueById("rectangular-area", value);
}

// calculate parallelogram
function calculateParallelogramArea(){
    const base = getValueById("parallelogram-base");
    const height = getValueById("parallelogram-height");

    const value = base * height;
    setValueById("parallelogram-area", value);
}

// calculate rhombus
function calculateRhombusArea(){
    const base = getValueById("rhombus-base");
    const height = getValueById("rhombus-height");

    const value = 0.5 *  base * height;
    setValueById("rhombus-area", value);
}

// calculate pentagon
function calculatePentagonArea(){
    const base = getValueById("pentagon-base");
    const height = getValueById("pentagon-height");

    const value = 0.5 * base * height;
    setValueById("pentagon-area", value);
}

// calculate ellipse
function calculateEllipseArea(){
    const base = getValueById("ellipse-base");
    const height = getValueById("ellipse-height");

    const pi = 3.14;
    const valueText = (pi * base * height).toFixed(2);
    const value = parseFloat(valueText); 
    setValueById("ellipse-area", value);
}





// function calculateTriangleArea() {
//     // get triangle base value
//     const triangleBaseText = document.getElementById('triangle-base').value;
//     const base = parseFloat(triangleBaseText);

//     // get triangle height value
//     const triangleHeightText = document.getElementById('triangle-height').value;
//     const height = parseFloat(triangleHeightText);

//     // calculate triangle area
//     const area = 0.5 * base * height;

//     // display triangle area
//     const triangleArea = document.getElementById('triangle-area');
//     triangleArea.innerText = area;
// }