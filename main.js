$(() => {
    $("button").click(() => {
        console.log($("input"))
            console.log($("input").length)
    })
});

let inputs =[]
for(let i =0;i<$("input").length;i++){
         inputs.push($("input")[i])
}
console.log(inputs);
