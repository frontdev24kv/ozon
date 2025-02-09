export const debounce = (func, ms = 300) => {

  let timerId;

  return (...arg) => {
    clearTimeout(timerId)

    timerId = setTimeout(() => func.apply(this, arg), ms)

  }
};