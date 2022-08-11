function makeid() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

class Selected {
  constructor(location, date, time) {
    this.id = makeid();
    this.location = location;
    this.date = date;
    this.time = time;
  }
}

export default Selected;
