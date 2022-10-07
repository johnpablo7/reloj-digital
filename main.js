const clock = document.querySelector(".clock__time");
const date = document.querySelector(".clock__date");

const getTimeClock = () => {
  const objectDate = new Date();

  const elementsDate = {
    day: objectDate.getDate(),
    month: objectDate.getMonth() + 1,
    year: objectDate.getFullYear(),
    dayWeek: objectDate.getDay(),
  }

  const elementsClock = {
    hour: objectDate.getHours(),
    minutes: objectDate.getMinutes(),
    seconds: objectDate.getSeconds(),
  }

  clock.innerHTML = `${elementsClock.hour} hrs : ${elementsClock.minutes} min : ${elementsClock.seconds} sec`;
  date.innerHTML = `${elementsDate.year}-${elementsDate.month}-${elementsDate.day}`;
}

setInterval(() => {
  getTimeClock()
}, 1000);

