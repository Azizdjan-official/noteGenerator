let noteIndex = 0;

document.addEventListener("dblclick", (e) =>{
    let x = e.clientX;
    let y = e.clientY;

    let note = document.createElement("div");
    note.classList.add("note");
    note.textContent = "note  " + ++noteIndex;
    document.body.append(note);
    note.style.top = y + "px";
    note.style.left = x + "px";

    note.addEventListener("mouseenter", (e) =>
    {
        e.target.remove();
        document.body.append(e.target);
    });
    note.addEventListener("click", (e) =>
    {
        e.preventDefault();
        e.target.setAttribute("contenteditable", true);

    });

    note.addEventListener("contextmenu", (e)=>
    {
        e.preventDefault();
        e.target.remove();

    });
    note.addEventListener("blue", (e)=>
    {
        e.preventDefault();
        e.target.setAttribute("contenteditable", false);

    });
    
})