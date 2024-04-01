function calculateTriangleArea() {
    // get triangle base value
    const triangleBaseText = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBaseText);

    // get triangle height value
    const triangleHeightText = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeightText);

    // calculate triangle area
    const area = 0.5 * base * height;

    // display triangle area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}