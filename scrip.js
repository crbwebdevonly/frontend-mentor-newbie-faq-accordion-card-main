const questionArray = document.querySelectorAll(".question");
console.log(questionArray);

questionArray.forEach((e, i) => {
     e.addEventListener("click", (arg) => {
        //   console.log(arg.target.classList.toggle("open"));
          arg.target.classList.toggle("open");          
          let num = arg.target.id;
          num = num.substr(num.length-1)
        //   console.log(num,`answer${num}`)
          const answer = document.getElementById(`answer${num}`);
        //   console.log(answer)
          
          answer.classList.toggle("open");
     });
});
