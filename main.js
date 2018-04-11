var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  // write your code here!
if (name in reservations && reservations[name].claimed){
  alert("You have used your Reservation before");
return;
}
else if (name in reservations && reservations[name].claimed == false){
    alert("Welcome "+ name);
    return;
}
else {
  alert("You have no Reservation");
}
}
claimReservation();