const h_hand = document.querySelector('[hour-h]')
const m_hand = document.querySelector('[minute-h]')
const s_hand = document.querySelector('[second-h]')


setInterval(()=>{
    const date = new Date()
    const second = date.getSeconds()/60;
    const minute = (second + date.getMinutes())/60;
    const hour = (minute + date.getHours())/12;
    rotate(h_hand, hour)
    rotate(m_hand, minute)
    rotate(s_hand, second)
}, 1000)


const rotate = (element, rotation) =>{
    element.style.setProperty('--rotation', rotation*360)
}