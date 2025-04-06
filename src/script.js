const chords = ["a", "b", "c", "d", "e", "f"]
const note = document.getElementById("note")

chords.forEach(chord => {
    const button = document.createElement("button")
    button.innerText = chord
    button.addEventListener("click", () => {
        const sound = new Audio(`assets/${chord}.wav`)
        sound.play()
    })
    note.appendChild(button)
})