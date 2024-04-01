function calculateEllipseArea() {
    // get triangle base value
    const rhombusBaseText = document.getElementById('ellipse-base').value;
    const a = parseFloat(rhombusBaseText);

    // get triangle height value
    const rhombusHeightText = document.getElementById('ellipse-height').value;
    const b = parseFloat(rhombusHeightText);

    // calculate triangle area
    const pi = 3.14;
    const areaTotal = pi * a * b;
    const areaText = areaTotal.toFixed(2);
    const area = parseFloat(areaText);

    // display triangle area
    const rhombusArea = document.getElementById('ellipse-area');
    rhombusArea.innerText = area;
}