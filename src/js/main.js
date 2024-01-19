export const addAnimationForChangePages = () => {
    const app = document.querySelector("#app");
    const as = document.querySelectorAll("a");

    for(let i = 0; i < as.length;i++) {
        as[i].addEventListener("click", (e) => {
            app.classList.remove("opacity");
            
            setTimeout(() => {
                app.classList.add("opacity");
            }, 50)

        })
    }
}