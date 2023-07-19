function heightmarks(marks){
    let highestmarks = marks[0];
    marks.forEach((mark) => {
        
        highestmarks = mark > highestmarks ? mark : highestmarks;
    });
    
    return highestmarks;
}
const marks = [];

for(let i = 0; i<5; i++){
    const userinput = prompt(`Enter Marks ${i+1}`);
    marks.push(userinput);
}
const highestMark = heightmarks(marks);

console.log(`All Students Marks are ${marks}`);
alert(`All Students Marks are ${marks}`);

console.log("Highest Marks=" +highestMark);
alert("Highest Marks=" +highestMark);
