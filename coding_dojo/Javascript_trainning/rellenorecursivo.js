var world = [
	[1,1,1,0,0,0,0,3,2,2],
	[0,0,0,0,1,0,0,3,3,3],
	[0,2,2,0,1,0,0,0,0,0],
	[0,2,2,0,1,1,1,1,0,0],
	[0,2,2,0,1,0,0,0,0,3],
	[0,2,2,0,1,0,0,3,3,3],
	[0,0,0,0,1,0,0,3,3,3]];
console.log(world);

var mapping = {
	0: 'white',
	1: 'red',
	2: 'yellow',
	3: 'blue',
	4: 'green'
}

function drawWorld()
{
    var output = '';
    for(var i=0; i<world.length; i++){
        output += '<div class="row">';
        for(var j=0; j<world[i].length; j++)
        {
            output += "<div class='"+mapping[world[i][j]]+"'></div>";
        }
        output += '</div>';
    }
    // esceribe todo el html que resulta del ciclo for
    document.getElementById('container').innerHTML = output;
    // console.log(output);
}

document.onclick = function(e)
{
    // console.log('Coordinate Clicked', e.x, e.y);

    var x = Math.floor(e.x/50);
    var y = Math.floor(e.y/50);

    // console.log('X, Y', x, y);
    // console.log('Original Color', world[y][x]);

    console.log('Replace color', world[y][x], ' with color 4 starting from x:', x, 'y:', y);
    fill(x, y, world[y][x], 4);
}

function fill(x,y,original_color, color)
{

    //your recursion codes here

 
    if (world[y][x] = mapping[0]){
        mapping[0] = 'green';
        console.log('por aqui pasamos', mapping[0]);
        drawWorld();
    }
    world[y][x] = color;
  


    

    // your recursion codes here

    drawWorld();
    
}

drawWorld();