/**
 * Преобразование номера к международному формату
 *
 * @param {String} phone
 * @return {String} Телефон в международном формате или null если не распознано
 */
export const parsePhone = (phone) => {
  if (!phone) {
    return null;
  }

  /** @type {String} */
  let phoneStr;

  // С "+7 913 065 89 17" трансформируем в "79130658917"
  phoneStr = phone.replace(/[^0-9]/g, "");

  // Если телефон из 11 цифр и первая 8, например "89609415289"
  if (phoneStr.length === 11 && phoneStr.startsWith("8")) {
    phoneStr = phoneStr.replace("8", "7");
  } else if (phoneStr.length === 10) {
    // Если телефон из 10 цифр
    // и первая 0 (например "0509181909")
    if (phoneStr.startsWith("0")) {
      // то предполагаем что это Укр номер
      phoneStr = "38" + phoneStr;
    } else {
      // и первая не 0 (например "9196826383"), то предполагаем что это РУ номер
      phoneStr = "7" + phoneStr;
    }
  }

  // Если в итоге это Ру номер вида 79130658917
  if (phoneStr.length === 11 && phoneStr.startsWith("7")) {
    return phoneStr;
  }

  // или Укр номер вида 380509181909
  else if (phoneStr.length === 12 && phoneStr.startsWith("38")) {
    return phoneStr;
  }

  // Не распознанный - отбрасываем его
  return null;
};
