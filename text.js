document.addEventListener('DOMContentLoaded', function() {
    var projectImage = this.document.querySelectorAll('.project-link .project-image');
    projectImage.forEach(function(image) {
        image.classList.add('border-change');
        
    });
});