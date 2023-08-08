window.onload = function(){
    const arr = Array.prototype.slice.call(document.getElementsByClassName('rate_text'))
    const p1_element = arr[0]
    const p2_element = arr[1]

    const p1_rate = Number(p1_element.innerText)
    const p2_rate = Number(p2_element.innerText)

    const p1_win = p1_rate + (16 + Math.floor((p2_rate - p1_rate) * 0.04))
    const p1_lose = p1_rate - (16 + Math.floor((p1_rate - p2_rate) * 0.04))

    const p2_win = p2_rate + (16 + Math.floor((p1_rate - p2_rate) * 0.04))
    const p2_lose = p2_rate - (16 + Math.floor((p2_rate - p1_rate) * 0.04))

    p1_element.innerHTML += '<p style="margin:0; color:red;">Win: ' + p1_win + '</p>'
    p1_element.innerHTML += '<p style="margin:0; color:blue;">Lose: ' + p1_lose + '</p>'

    p2_element.innerHTML += '<p style="margin:0; color:red;">Win: ' + p2_win + '</p>'
    p2_element.innerHTML += '<p style="margin:0; color:blue;">Lose: ' + p2_lose + '</p>'
}