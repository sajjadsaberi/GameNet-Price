const btn = document.getElementById("btn");
const input1 = document.getElementById("txt1");
const input2 = document.getElementById("txt2");

btn.addEventListener("click", function () {
  if (input1.value === "" && input2.value === "") {
    alert("Enter a Time :");
  } else {
    alert(calculateTimeDifference());
  }
});

function calculateTimeDifference() {
  var date1 = new Date(input1.value);
  var date2 = new Date(input2.value);

  var diff = date2.getTime() - date1.getTime();

  var msec = diff;
  var hh = `0${Math.floor(msec / 1000 / 60 / 60)}`;
  msec -= hh * 1000 * 60 * 60;

  var mm = `0${Math.floor(msec / 1000 / 60)}`;
  msec -= mm * 1000 * 60;

  var ss = `0${Math.floor(msec / 1000)}`;
  msec -= ss * 1000;

  var results = hh.slice(-2) + ":" + mm.slice(-2) + ":" + ss.slice(-2);

  var ha = hh.slice(-2);
  var ma = mm.slice(-2);
  var mohaseb = `${ha}.${ma}`;
  var calcu = mohaseb * 17000;
  //var calc = (hh.slice(-2)) * 17000;
  var tCalc = `هزینه میزان استفاده شما مبلغ ${calcu} هزار تومان می باشد`;

  return tCalc;
}
