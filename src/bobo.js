const xlsx = require('xlsx')
const rand = require("random")

excel_directory = 'bobo.xls'

var wb = xlsx.readFile(excel_directory)
var ws = wb.Sheets['Sheet1']
var data = xlsx.utils.sheet_to_json(ws)

function get_winner(){
    let rd = rand.int((min = 0), (max = data.length - 1))
    let winner = Object.values(data[rd])
    winner[0] = winner[0].toString(10)
    return winner
}

function get_randomizer(){
    let randomizer = data.map(function (record) {
        return record.NIM
    })
    return randomizer
}

async function randomize(){
    var data = get_winner()
    var rand = get_randomizer()
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
}

function click(){
    popup = document.getElementById('popup')
    popup.style.visibility = "hidden";
}

document.body.addEventListener('mouseup', click);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}