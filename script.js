let width = 40;
let height = 20;

function wait(ms)
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve();
        }, ms)
    })
}

const squaresDiv = document.getElementById('squares');
let squares = [];

for(let w = 0; w < width; w++)
{
    for(let h = 0; h < height; h++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        squaresDiv.append(square);
        squares.push(square);

        square.addEventListener('mouseenter', async() => 
        {
            console.log(~1, 1 << 24)
            square.style = `background-color: #${ ((1 << 24) * Math.random() | 0).toString(16) }`;
            await wait(300);
            square.style = "background-color: #000";
        });
    }
}