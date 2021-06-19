const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

 

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover',
    dragover)
    placeholder.addEventListener('dragenter',
    dragenter)
    placeholder.addEventListener('dragleave',
    dragleave)
    placeholder.addEventListener('drop',
    dragdrop)
}

function dragstart(event){
    event.target.classList.add('hold') // добавляем класс элементу, когда держим
    setTimeout(() => event.target.classList.add
    ('hide'), 0) // скрываем элемент, когда начинаем перетаскивать, обертываем в setTimeout, чтобы он не пропал совсем
}

function dragend(){
    event.target.classList.remove('hold') // удаляем класс элементу, когда отпускаем
    event.target.classList.remove('hide') // удаляем класс hide, чтобы элемент не пропал, когда его отпускаешь
    // можно сократить запись строк выше и написать: event.target.className = 'item'
    //"перетрет все классы и оставит только указанный"
}
function dragover(){
    // по умолчанию она отменяет поведение dragdrop, исправляем:
    event.preventDefault()
    console.log('drag over')
}
function dragenter(){
    event.target.classList.add('hovered') // добавляем класс, чтобы показать что мы перетащили карточку в то место, где ее можно сбросить
    console.log('drag enter')
}
function dragleave(){
    event.target.classList.remove('hovered')// удаляем класс, когда убираем карточку из места плейсхолдера
    console.log('drag leave')
}
function dragdrop(){
    event.target.append(item)
    event.target.classList.remove('hovered')
    // event.target - это будет плейсхолдер, с которым мы работаем
}