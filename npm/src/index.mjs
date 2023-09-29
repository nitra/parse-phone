/**
 * Перетворення номера на міжнародний формат
 *
 * @param {String} phone
 * @return {String|null} Телефон у міжнародному форматі або null якщо не розпізнано
 */
export const parsePhone = phone => {
  if (!phone) {
    return null
  }

  /** @type {String} */
  let phoneStr

  // З "+7 913 065 89 17" трансформуємо в "79130658917"
  phoneStr = phone.replace(/[^0-9]/g, '')

  // Прибираємо 2 нулі на початку рядка
  phoneStr = phoneStr.replace(/^00/, '')

  // Якщо телефон з 11 цифр та перша 8, наприклад "89609415289"
  if (phoneStr.length === 11 && phoneStr.startsWith('8') && !phoneStr.startsWith('80')) {
    phoneStr = phoneStr.replace('8', '7')
  } else if (phoneStr.length === 10) {
    // Якщо телефон із 10 цифр
    // та перша 0 (наприклад "0509181909")
    if (phoneStr.startsWith('0')) {
      // то припускаємо, що це Укр номер
      phoneStr = '38' + phoneStr
    } else {
      // і перша не 0 (наприклад "9196826383"), то припускаємо, що це РУ номер
      phoneStr = '7' + phoneStr
    }
  }

  // Якщо в підсумку це ру номер виду 79130658917
  if (phoneStr.length === 11 && phoneStr.startsWith('7')) {
    return phoneStr
  }

  //  якщо Укр номер виду 380509181909
  else if (phoneStr.length === 12 && phoneStr.startsWith('38')) {
    return phoneStr
  }

  // якщо Укр номер виду 80509181909
  else if (phoneStr.length === 11 && phoneStr.startsWith('8')) {
    return phoneStr
  }

  // Не вдалось розпізнати номер
  return null
}
