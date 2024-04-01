function calculateRhombusArea() {
    // get triangle base value
    const rhombusBaseText = document.getElementById('rhombus-base').value;
    const base = parseFloat(rhombusBaseText);

    // get triangle height value
    const rhombusHeightText = document.getElementById('rhombus-height').value;
    const height = parseFloat(rhombusHeightText);

    // calculate triangle area
    const area = 0.5 * base * height;

    // display triangle area
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;
}