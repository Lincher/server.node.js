interface Shape{
    name:string;
    width:number;
    height:number;
    color?:string;
}

function area(shape:Shape){
    var area = shape.width*shape.height;
    return " I'm " + shape.name+ " with area "+ area +" cm squared";
}

var newObj=document.createElement("<a></a>");
newObj.innerText=area( {name: "rectangle", width: 30, height: 15} );
document.body.appendChild(newObj);
newObj.innerText=area( {name: "square", width: 30, height: 30, color: "blue"} );
document.body.appendChild(newObj);