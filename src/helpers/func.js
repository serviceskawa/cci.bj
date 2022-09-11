
import { convertArrayToCSV } from 'convert-array-to-csv'
export function downloadCSV (args) {
  var filename, link
  var csv = convertArrayToCSV(args.data)
  if (csv == null) return
  filename = `${args.filename}.csv` || 'export.csv'
  var blob = new Blob(['\ufeff', csv])
  var url = URL.createObjectURL(blob)
  link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', filename)
  link.click()
}
