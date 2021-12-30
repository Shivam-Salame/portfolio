let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/square.jpg') {
      myImage.setAttribute('src','images/shivam_1.jpg');
    } else if(mySrc === 'images/shivam_1.jpg') {
        myImage.setAttribute('src','images/shivam_2.jpg'); 
    } else {
      myImage.setAttribute('src','images/square.jpg');
    }
}
