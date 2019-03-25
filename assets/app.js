

function onGenerate(blob){        
    window.saveAs(blob, 'euk-moment.png');      
}


function generateBanner(){    
    setTimeout(donwloadBanner, 500);
    
}

function addFieldToPreview(event){
    applyField(event.currentTarget.id);
}

function applyField(field){
    var inputValue = $('#' + field).val();
    $('#' + field + '-label').text(inputValue)
}

function donwloadBanner(){
    var node = document.getElementById('eureka-moment');

    domtoimage.toBlob(node)
        .then(onGenerate)
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
}


function previewImage(event) {
    var output = document.getElementById('picture-preview');
    output.src = URL.createObjectURL(event.target.files[0]);
  }