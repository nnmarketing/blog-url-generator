

var testFunc = function() {
  var el = document.getElementById('input').value;
  // var desired = el.replace(/(&)/g, '')
  var desired = el.replace(/[^-\w\s]/gi, '').toLowerCase().split(' ').join('-')
  desired = desired.replace(/((--))/gi, '-')

  document.getElementById('output').innerHTML = desired
  document.getElementById('message').innerHTML = '👍 👍 👍'
}
