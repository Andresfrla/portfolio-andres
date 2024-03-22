function handleVisibility(entries: IntersectionObserverEntry[], observer:  IntersectionObserver): void {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const classesToAdd = ['animate-fade-right', 'animate-once', 'animate-duration-[3000ms]'];
            classesToAdd.forEach(className => {
                entry.target.classList.add(className);
            });
        } else {
            const classesToRemove = ['animate-fade-right', 'animate-once', 'animate-duration-[3000ms]'];
            classesToRemove.forEach(className => {
                entry.target.classList.remove(className);
            });
        }   
    });
}  

let observer = new IntersectionObserver(handleVisibility, {});

let elements = document.getElementsByClassName("animate-scroll");
Array.from(elements).forEach(element => {
    observer.observe(element);
});
