function calculatePentagonArea() {
    // get triangle base value
    const rhombusBaseText = document.getElementById('pentagon-base').value;
    const p = parseFloat(rhombusBaseText);

    // get triangle height value
    const rhombusHeightText = document.getElementById('pentagon-height').value;
    const b = parseFloat(rhombusHeightText);

    // calculate triangle area
    const area = 0.5 * p * b;

    // display triangle area
    const rhombusArea = document.getElementById('pentagon-area');
    rhombusArea.innerText = area;
}