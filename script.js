const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

class dragStart {
    constructor() {
        this.className += ' hold'
        setTimeout(() => this.className = 'invisible', 0)
    }
}

class dragEnd {
    constructor() {
        this.className = 'fill'
    }
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

class dragLeave {
    constructor() {
        this.className = 'empty'
    }
}

class dragDrop {
    constructor() {
        this.className = 'empty'
        this.append(fill)
    }
}