import { createTable } from '@/components/table/table.template'
import { ExcelComponent } from '@core/ExcelComponent'

export class Table extends ExcelComponent {

    static className = 'excel__table'

    toHtml() {
        return createTable(20)
    }

}