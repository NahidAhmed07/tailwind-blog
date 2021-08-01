var blogs = document.querySelectorAll(".animet");
var animetOne = document.querySelectorAll(".animet-one");
blogs.forEach(function(blog){
    blog.onmouseover = function(){
        this.querySelector('.blog-parent').classList.add("animate__slideInUp","animate__animated", "opacity");
        
    }
})

animetOne.forEach(function(animet){
    animet.onmouseover = function(){
        this.querySelector(".left-item").classList.add("animate__slideInLeft","animate__animated", "opacity")
        this.querySelector('.right-item').classList.add("animate__slideInRight","animate__animated", "opacity")
    }
})