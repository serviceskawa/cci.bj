export function isValidPhone(value) {
    const prefixes = ['51', '52', '61', '62', '66', '67', '69', '90', '91', '96', '97']
    const phone_prefixe = value.toString()[0] + value.toString()[1]
    const lengthOf = parseInt(value).toString().length
    return prefixes.includes(phone_prefixe) && lengthOf == 8
}

export function isValidPassword(password) {
    const regExp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    const isvalid = regExp.test(password)
    return isvalid
}