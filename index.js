function copyToClipboard(id) {
    var copyText = document.getElementById(id);
    navigator.clipboard.writeText(copyText.innerText);
}

function toggleCodeBlock(id) {
    // var copyText = document.getElementById(id);
    var codeBlock = document.getElementById(id);
    // toggle the class 'collapsed' on the code block
    codeBlock.classList.toggle('collapsed');
    
}