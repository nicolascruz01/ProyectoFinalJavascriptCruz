const url = "https://jsonplaceholder.typicode.com/posts"
$.get(url, (repuesta, estado) => {
    if(estado === "success") {
        console.log(repuesta);
        repuesta.forEach(e => {
            $("#news").append(`
            <p>${e.id}</p>
            <p>${e.title}</p>
            
            `)
            
        });





     
}})