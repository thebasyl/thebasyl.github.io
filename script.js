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
            square.style = `background-color: #${ ((1 << 24) * Math.random() | 0).toString(16) }`;
            await wait(300);
            square.style = "background-color: #000";
        });
    }
}

const menu_items = document.getElementsByClassName('menu-item');
for(let menu_item of menu_items)
{
    menu_item.addEventListener('mouseover', () => 
    {
        menu_item.style = `background-color: ${ menu_item.dataset.colour }`;
    });
    
    menu_item.addEventListener('mouseleave', () => 
    {
        menu_item.style = "";
    });
}

function basil()
{
    alert("oops! that page doesnt exist, yet. More information about Basil coming soon.\n- Noel Nimstad")
}

function UCG()
{
    alert("oops! that page doesnt exist, yet. More information about Untitled Card Game is coming soon.\n- Noel Nimstad")
}