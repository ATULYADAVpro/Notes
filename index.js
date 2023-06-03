const addBtn = document.querySelector("#addBtn");
const main = document.querySelector(".main");

const saveNotes = () =>
{
const note = document.querySelectorAll(".note textarea");
console.log(note);
const data = [];
note.forEach(
    (note) =>{
        data.push(note.value);
    }
    )
    console.log(data);
    localStorage.setItem("notes",JSON.stringify(data))
}


addBtn.addEventListener("click", function(){addNote();})

const addNote = (text = "") => 
{
    const notes = document.createElement("div");
    notes.classList.add("note");
    notes.innerHTML = `<div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`;

    notes.querySelector(".trash").addEventListener("click",function(){notes.remove(); saveNotes();})
    notes.querySelector(".save").addEventListener("click",function(){saveNotes();})

    main.appendChild(notes);

}

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        lsNotes.forEach(
            (lsNote) =>{
                addNote(lsNote);
            }
        )
        // console.log(lsNotes);
        if (lsNotes.lenght == 0) {
            localStorage.removeItem("notes")
        }else{
            addNote()
        }
    }
)()
