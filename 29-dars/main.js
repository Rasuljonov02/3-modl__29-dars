// let lists = document.getElementsByClassName("files");
// let rightBox = document.getElementById("right");
// let leftBox = document.getElementById("left");
 
// for(list of lists){
//     list.addEventListener("dragstart" , function(e){
//         let selected= e.teget;
//         rightBox.addEventListener("dragover",function(e){

//             e.preventDefault();
//         })
//     })
//     }




var dragElement = document.getElementById("dragElement");
var dropArea = document.getElementById("dropArea");

dragElement.addEventListener("dragstart", function(event) {
  // Surilgan elementning ID sini saqlaymiz
  event.dataTransfer.setData("text/plain", event.target.id);
});

dropArea.addEventListener("dragover", function(event) {
  event.preventDefault();
});

dropArea.addEventListener("drop", function(event) {
  event.preventDefault();
  
  // Surilgan elementning ID sini ma'lumot transferidan olib olish
  var draggedElementId = event.dataTransfer.getData("text/plain");
  
  // Surilgan elementni qo'yish
  var draggedElement = document.getElementById(draggedElementId);
  dropArea.appendChild(draggedElement);
});

