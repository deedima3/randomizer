async function randomize(){
    data = await eel.get_winner()()
    rand = await eel.get_randomizer()()
    nim = document.getElementById('nim')
    nama = document.getElementById('nama')
    random = document.getElementById('random')
    popup = document.getElementById('popup')
    for (let i of rand) {
        random.innerHTML = i
        await sleep(20)
    }
    for(let i of rand){
        random.innerHTML = i
        await sleep(20)
        if (i == data[0]) {
            break;
        }
    }
    nim.innerHTML = data[0]
    nama.innerHTML = data[1]
    popup.style.visibility = "visible";
    await sleep(5000)
    popup.style.visibility = "hidden";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}