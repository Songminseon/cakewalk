function custom() {

var li_eliments = document.querySelectorAll(".wrapper_left ul li");
var item_eliments = document.querySelectorAll(".item");
var shape_eliments = document.querySelectorAll(".wrapper_right_shape ul li button");
var taste_eliments = document.querySelectorAll(".wrapper_right_taste ul li button");
var scale_eliments = document.querySelectorAll(".wrapper_right_scale ul li button");
var side_deco_eliments = document.querySelectorAll(".wrapper_right_side ul li button");
var side_deco_btn = document.querySelectorAll(".side_decoration ul li button");
var edge_deco_btn = document.querySelectorAll(".edge_decoration ul li button");
var dots = document.querySelectorAll(".dotBtn button");
const canvas_active = document.getElementsByClassName("canvas_active");
const shape_Color = document.getElementsByClassName("shape_Color");
const top_text_Color =document.getElementsByClassName("top_text_Color"); 
const bottom_text_Color =document.getElementsByClassName("bottom_text_Color"); 


var canvas = new fabric.Canvas('canvas',{
    renderOnAddRemove: false ,
    width:500,
    height:500,
});
var canvas2 = new fabric.Canvas('canvas2',{
    renderOnAddRemove: false ,
    width:500,
    height:500,
});

canvas.on({
    'object:moving': function(e) {		  	
    e.target.opacity = 0.5;
    },
    'object:modified': function(e) {		  	
    e.target.opacity = 1;
    },
    'object:added':function(){
        if(!isRedoing){
            h = [];
        }
        isRedoing = false;
    }
});
canvas2.on({
    'object:moving': function(e) {		  	
    e.target.opacity = 0.5;
    },
    'object:modified': function(e) {		  	
    e.target.opacity = 1;
    },
    'object:added':function(){
        if(!isRedoing){
            h = [];
        }
        isRedoing = false;
    }
});

var circle = new fabric.Circle({
    radius:160,
    fill:'#FCF5EC',
    left:canvas.getCenter().left,
    top:canvas.getCenter().top,
    originX:'center',
    originY:'center',
    hasControls:false,
    lockMovementX:true,
    lockMovementY:true,
    selectable:false,
});
var square = new fabric.Rect({
    width:300,
    height:300,
    fill:'#FCF5EC',
    left:canvas.getCenter().left,
    top:canvas.getCenter().top,
    originX:'center',
    originY:'center',
    hasControls:false,
    lockMovementX:true,
    lockMovementY:true,
    selectable:false
});

var rectangle = new fabric.Rect({
    width:320,
    height:230,
    fill:'#FCF5EC',
    left:canvas.getCenter().left,
    top:canvas.getCenter().top,
    originX:'center',
    originY:'center',
    hasRotatingPoint: true,
    selectable:false

});
var side_rectangle = new fabric.Rect({
    width:300,
    height:100,
    fill:'#FCF5EC',
    left:canvas.getCenter().left,
    top:canvas.getCenter().top,
    originX:'center',
    originY:'center',
    hasRotatingPoint: true,
    selectable:false
});
var bottom_rectangle = new fabric.Rect({
    width:400,
    height:20,
    fill:'#FCF5EC',
    left:canvas.getCenter().left,
    top:300,
    originX:'center',
    originY:'center',
    hasRotatingPoint: true,
    selectable:false
});
canvas2.add(side_rectangle);
canvas2.add(bottom_rectangle);

var heart = new fabric.Path('M 272.70141,238.71731 \
    C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731  \
    C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 \
    C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 \
    C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731  \
    C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 \
    C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  \
    z ');




// var scale = 300 / heart.width;
heart.set({
    left:canvas.getCenter().left-180,
    top:canvas.getCenter().top-170,
    scaleX: 0.8, 
    scaleY: 0.8,  
    fill:'#FCF5EC',
    hasControls:false,
    lockMovementX:true,
    lockMovementY:true,
    selectable:false
});

canvas.add(heart);
canvas.renderAll();

for(var i=0; i<li_eliments.length; i++){
    li_eliments[i].addEventListener("click", function(){
        li_eliments.forEach(function(li){
            li.classList.remove("active")
        })
        document.getElementById('canvas').classList.remove("canvas_active")
        document.getElementById('canvas2').classList.remove("canvas_active")
        item_eliments.forEach(function(item){
            item.style.display="none";
        })
        this.classList.add("active");
        document.getElementById('dot1').classList.add("dot_none");
        document.getElementById('dot2').classList.add("dot_none");
        var li_value = this.getAttribute("data-li");
        
        if(li_value == "initial"){
            document.querySelector("."+li_value).style.display = "block";
            document.getElementById('canvas2').classList.add("canvas_active")
        }
        else if(li_value == "cake_top"){
            document.querySelector("."+li_value).style.display = "block";
            document.getElementById('canvas2').classList.add("canvas_active");

        }
        else if(li_value == "cake_side"){
            document.querySelector("."+li_value).style.display = "block";
            document.getElementById('canvas').classList.add("canvas_active");
            document.getElementById('dot1').classList.remove("dot_none");
            document.getElementById('dot2').classList.remove("dot_none");
        }
        else{
            console.log("");
        }
    });
} 

for (var i=0; i<shape_eliments.length; i++){
    shape_eliments[i].addEventListener("click",function(){
        shape_eliments.forEach(function(button){
            button.classList.remove("Btn_clicked")
            // canvas.remove(circle);
            // canvas.remove(heart);
            // canvas.remove(square);
            // canvas.remove(rectangle);
            canvas.clear();
            
        })

        this.classList.add("Btn_clicked")
        if(this.value == "circle"){
            canvas.add(circle);
            canvas.renderAll();
        }
        else if (this.value == "heart"){
            canvas.add(heart);
            canvas.renderAll();
        }
        else if (this.value == "square"){
            canvas.add(square);
            canvas.renderAll();
        }
        else if (this.value == "rectangle"){
            canvas.add(rectangle);
            canvas.renderAll();
        }
        else{
    
        }
    })
}

for (var i=0; i<taste_eliments.length; i++){
    taste_eliments[i].addEventListener("click",function(){
        taste_eliments.forEach(function(button){
            button.classList.remove("Btn_clicked")
        })
        this.classList.add("Btn_clicked")
    })
}



const shape_array_color = Array.from(shape_Color).forEach(color => color.addEventListener("click",changeShapeColor));

function changeShapeColor(event){
    const pickcolor = event.target.style.backgroundColor;
    circle.set('fill',pickcolor);
    heart.set('fill',pickcolor);
    square.set('fill',pickcolor);
    rectangle.set('fill',pickcolor);
    side_rectangle.set('fill',pickcolor);
    canvas.renderAll();
    canvas2.renderAll();
} 

document.getElementById("top-add-text").onclick = add_top_text;
var top_text = document.getElementById("top-add-text");
function add_top_text(){
    text=document.getElementById("top-text-string");
    top_text= new fabric.Textbox(text.value,{
        left: fabric.util.getRandomInt(100, 400),
        top: fabric.util.getRandomInt(50, 400),
        fill:'black',
    });
    canvas.add(top_text);
    canvas.renderAll();
}

document.getElementById("bottom-add-text").onclick = add_bottom_text;
var bottom_text = document.getElementById("bottom-add-text");

function add_bottom_text(){
    text=document.getElementById("bottom-text-string");
    bottom_text= new fabric.Textbox(text.value,{
        left: fabric.util.getRandomInt(0, 400),
        top: fabric.util.getRandomInt(350, 450),
        fill:'black',
    });
    canvas.add(bottom_text);
    canvas.renderAll();
}



const input_top_range = document.getElementById("input_top_range");
input_top_range.addEventListener("input", changeTopTextSize);

function  changeTopTextSize(event){
    const size = event.target.value;
    var activeObjects = canvas.getActiveObjects();
    var activeObject = canvas.getActiveObject();
    if (activeObject){
        activeObjects.forEach(function(object) { 
            object.set('fontSize',size);
            canvas.renderAll();
            })
    }
    canvas.renderAll();
}

const input_bottom_range = document.getElementById("input_bottom_range");
input_bottom_range.addEventListener("input", changeBottomTextSize);

function  changeBottomTextSize(event){
    const size = event.target.value;
    var activeObjects = canvas.getActiveObjects();
    var activeObject = canvas.getActiveObject();
    if (activeObject){
        activeObjects.forEach(function(object) { 
            object.set('fontSize',size);
            canvas.renderAll();
            })
    }
    canvas.renderAll();
}


const top_text_array_color = Array.from(top_text_Color).forEach(color => color.addEventListener("click",changeTopTextColor));

function changeTopTextColor(event){
    const pickcolor = event.target.style.backgroundColor;
    var activeObjects = canvas.getActiveObjects();
    var activeObject = canvas.getActiveObject();

    if (activeObject){
        activeObjects.forEach(function(object) { 
            object.set('fill',pickcolor);
            canvas.renderAll();
            })
    }
    canvas.renderAll();
}



const bottom_text_array_color = Array.from(bottom_text_Color).forEach(color => color.addEventListener("click",changeBottomTextColor));

function changeBottomTextColor(event){
    const pickcolor = event.target.style.backgroundColor;
    var activeObjects = canvas.getActiveObjects();
    var activeObject = canvas.getActiveObject();

    if (activeObject){
        activeObjects.forEach(function(object) { 
            object.set('fill',pickcolor);
            canvas.renderAll();
            })
    }
    canvas.renderAll();
}
document.getElementById("side-add-text").onclick = add_side_text;
function add_side_text(){
    text=document.getElementById("side-text-string");
    side_text2= new fabric.Textbox(text.value,{
        left: fabric.util.getRandomInt(50, 400),
        top: fabric.util.getRandomInt(200, 300),
        fill:'black',
    });
    canvas2.add(side_text2);
    canvas2.renderAll();
}


for (var i=0; i<side_deco_eliments.length; i++){
    side_deco_eliments[i].addEventListener("click",function(){
        side_deco_eliments.forEach(function(button){
            button.classList.remove("Btn_clicked")
        })
        document.getElementById("side_deco").classList.remove("side_display")
        document.getElementById("side_text").classList.remove("side_display")
        this.classList.add("Btn_clicked")
        if(this.value=="text"){
            document.getElementById("side_deco").classList.add("side_display")
        }
        else if(this.value == "deco"){
            document.getElementById("side_text").classList.add("side_display")
        }
        else if(this.value == "none"){
            document.getElementById("side_deco").classList.add("side_display")
            document.getElementById("side_text").classList.add("side_display")
        }
    });
}

for (var i=0; i<side_deco_btn.length; i++){
    side_deco_btn[i].addEventListener("click",function(){
        side_deco_btn.forEach(function(button){
            button.classList.remove("Btn_scale")
        })
        this.classList.add("Btn_scale")
    })
}

for (var i=0; i<scale_eliments.length; i++){
    scale_eliments[i].addEventListener("click", function(){
        var size_mini = 0.6;
        var size_1 = 1;
        var size_2 = 1.4;
        var shapeArray = [circle,heart,square,rectangle];

        scale_eliments.forEach(function(button){
            button.classList.remove("Btn_scale")
        })
        this.classList.add("Btn_scale")
        if(this.value=="mini"){
            for(var i=0; i<shapeArray.length; i++){
                
                shapeArray[i].set('scaleX',size_mini);
                shapeArray[i].set('scaleY',size_mini);
                console.log("hello")
                shapeArray[1].set('left',canvas.getCenter().left-140);
                shapeArray[1].set('top',canvas.getCenter().top-140)

            }
            canvas.renderAll();
        }
        else if(this.value=="size_1"){
            for(var i=0; i<shapeArray.length; i++){
                shapeArray[i].set('scaleX',size_1);
                shapeArray[i].set('scaleY',size_1);
                    shapeArray[1].set('scaleX',0.8);
                    shapeArray[1].set('scaleY',0.8);
                    shapeArray[1].set('left',canvas.getCenter().left-180);
                    shapeArray[1].set('top',canvas.getCenter().top-170);
            }
            canvas.renderAll();

        }
        else if(this.value=="size_2"){
            for(var i=0; i<shapeArray.length; i++){
                shapeArray[i].set('scaleX',size_2);
                shapeArray[i].set('scaleY',size_2);
                shapeArray[1].set('scaleX',1);
                shapeArray[1].set('scaleY',1);
                shapeArray[1].set('left',canvas.getCenter().left-230);
                shapeArray[1].set('top',canvas.getCenter().top-210);
            
            }
            canvas.renderAll();

        }
        
    })
}

for (var i=0; i<dots.length; i++){
    dots[i].addEventListener("click",function(){
        dots.forEach(function(button){
            button.classList.remove("dot_opacity")
        })
        this.classList.add("dot_opacity")

        if(this.value == "plus_deco"){
            document.querySelector(".wrapper_right_side_edge").style.display = "none";
            document.querySelector(".wrapper_right_side").style.display = "block";
        }
        else if(this.value ==="edge_deco"){
            document.querySelector(".wrapper_right_side").style.display = "none";
            document.querySelector(".wrapper_right_side_edge").style.display = "block";
        }
    })
}
const remove = document.getElementById('removeBtn');
function removeFn(){
    var activeObject = canvas.getActiveObjects();
        if (activeObject) {
            activeObject.forEach(function(object) {
            canvas.remove(object);
            })
        canvas.renderAll();
}
}
var activeObject = canvas.getActiveObjects();

remove.addEventListener("click",removeFn);

var isRedoing = false;
var h = [];
const undoBtn = document.getElementById('undoBtn');
undoBtn.addEventListener("click",undo);
function undo(){
    if(canvas._objects.length>0){
    h.push(canvas._objects.pop());
    canvas.renderAll();
}
}
const saveCanvas = document.getElementById("saveBtn")
saveCanvas.addEventListener("click",function(){
    var image_top = canvas.toDataURL();
    var image_side = canvas2.toDataURL();
    var imageSVG = canvas.toSVG();
    console.log(image_top);
    console.log(image_side);
});


const reset = document.getElementById('resetBtn');
reset.addEventListener("click",function(){
    canvas.clear();
})

// function check_only(chk){
//     var obj= document.getElementsByName("chkbox");
//     for(var i=0; i<obj.length; i++){
//         if(obj[i] !=chk){
//             obj[i].checked = false;
//         }
//     }
// }
canvas.renderAll();
canvas2.renderAll();
}
custom();

