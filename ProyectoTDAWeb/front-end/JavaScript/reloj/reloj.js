function showTime() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    const time = `${hour}:${addZero(minutes)}:${addZero(seconds)}`;
    const dateText = `${day}/${month}/${year}`;
  
    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = dateText;
  
    setTimeout(showTime, 1000);
  }
  
  function addZero(number) {
    if (number < 10) {
      return "0" + number.toString();
    } else {
      return number.toString();
    }
  }
  
  showTime();