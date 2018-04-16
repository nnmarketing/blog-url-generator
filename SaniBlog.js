var convert = function() {
  var slug = document.getElementById('input').value.replace(/[^-\w\s]/gi, '').toLowerCase().split(' ').join('-').replace(/((--))/gi, '-')
  document.getElementById('output').innerHTML = slug
  document.getElementById('message').innerHTML = '👍 👍 👍'
}
