function calculateRectangularArea() {
    // get triangle base value
    const rectangularWidthText = document.getElementById('rectangular-width').value;
    const width = parseFloat(rectangularWidthText);

    // get triangle height value
    const rectangularLengthText = document.getElementById('rectangular-length').value;
    const length = parseFloat(rectangularLengthText);

    // calculate triangle area
    const area = width * length;

    // display triangle area
    const rectangularArea = document.getElementById('rectangular-area');
    rectangularArea.innerText = area;
}