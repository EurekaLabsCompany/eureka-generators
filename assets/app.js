

function onGenerate(blob){        
    var date = new Date();    
    window.saveAs(blob, 'eureka' + date.getMinutes() + "-" + date.getSeconds() +'.png');      
}

function downloadAsHtml(name){
    var textToWrite = $('#template-section')[0].innerHTML;
    var blob = new Blob([textToWrite], {type:'text/html'});
    window.saveAs(blob, name || 'euk' + '.html');      
}

function generateBanner(){    
    setTimeout(donwloadBanner, 500);    
}

function addFieldToPreview(event){
    applyField(event.currentTarget.id);
}

function applyField(field){
    var inputValue = $('#' + field).val();
    var inputType = $('#' + field).attr('type');

    $('#' + field + '-label').text(inputValue);

    if(inputType == 'email'){        
        $('#' + field + '-label').prop("href", "mailto:" + inputValue);
    }


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

  function restrictToBoxPreview(size){  
    setTimeout(resizePreview, 500);    

    function resizePreview(){
        var output = document.getElementById('picture-preview');
        var offset = output.getBoundingClientRect();
        var style = ''

        if(offset.width < offset.height){
            style = style + `width: ${size};`
        }else{
            style = style + `height: ${size};`
        }


        output.style = style;
    }
    
}