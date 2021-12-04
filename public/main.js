var trash = document.getElementsByClassName("fa-trash");


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const title = this.getAttribute('data-id')
        console.log(title)
        fetch('deletePlaylist', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': title
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

let saveToProfile = document.querySelector('#saveBtn')
saveToProfile.addEventListener('click', (e)=>{
  let playlistname = document.querySelector('.playName').value

	let arr = e.target.getAttribute('data-save')
  let songIds = arr.split(',')
  
  fetch('savePlaylist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'saved': songIds,
      'playlistname': playlistname
    })
  }).then(function (response) {
    window.location.reload(false) 

 

  
  })
console.log(playlistname)
	console.log(arr)
  
})

