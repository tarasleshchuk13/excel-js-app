const CODES = {
    A: 65,
    Z: 90,
}

function toCell() {
    return `<div class="cell" contenteditable></div>`
}

function toColumn(col) {
    return `<div class="column">${col}</div>`
}

function createRow(content, number) {
    return `
        <div class="row">
            <div class="row-info">${number ?? ''}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill(null)
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill(null)
            .map(toCell)
            .join('')

        rows.push(createRow(cells, i + 1))
    }

    return rows.join('')
}