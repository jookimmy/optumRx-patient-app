// var Peer = require('simple-peer');
// var peer1 = new Peer({
// 	initiator: location.hash == '#init',
// 	trickle: false
// })


// peer.on('signal', function(data) {
// 	document.getElementByID('yourID').value = JSON.stringify(data)
// })

// document.getElementByID('connect').addEventListener('click', function() {
// 	var otherID = JSON.parse(document.getElementByID('otherID').value)
// 	peer.signal(otherID)
// })

// document.getElementByID('send').addEventListener('click', function() {
// 	var yourMessage = document.getElementByID('yourMessage').value
// 	peer.send(yourMessage)
// })

// peer.on('data', function (data) {
// 	document.getElementByID('messages').textContet += data + '\n'
// })
var getUserMedia = require('getusermedia');

getUserMedia({ video: true, audio: true }, function (err, stream) {
  if (err) return console.error(err);

  var Peer = require('simple-peer');
  
  var patient = new Peer({
    initiator: location.hash === '#patient',
    trickle: false,
    stream: stream
  });


  patient.on('signal', function (data) {
    document.getElementById('yourId').value = JSON.stringify(data)
  });

  document.getElementById('connect').addEventListener('click', function () {
    var otherId = JSON.parse(document.getElementById('otherId').value);
    patient.signal(otherId);
  });

  document.getElementById('send').addEventListener('click', function () {
    var yourMessage = document.getElementById('yourMessage').value;
    patient.send(yourMessage);
  });

  patient.on('data', function (data) {
    document.getElementById('messages').textContent += data + '\n';
  });

  patient.on('stream', function (stream) {
    var video = document.createElement('video');
    document.body.appendChild(video);

    video.srcObject = stream;
    video.play();
  });
});