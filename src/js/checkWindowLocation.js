import Images from "./imgs.js";

export const checkWindowLocation = () => {
    const body = document.querySelector("body");
    const a = document.querySelectorAll("a");
    const {pathname} = window.location;
    const images = new Images();

    images.add("./src/assets/mountains-universe-1.png");
    images.add( "./src/assets/mountains-universe-3.png");
    images.add("./src/assets/mountains-universe02.png");

    if(pathname === "/") {
        a[0].classList.add("white")
        a[1].classList.remove("white")
        a[2].classList.remove("white")
        body.style.backgroundImage = `url(${images.images[0]})`;
    }

    if(pathname === "/theUniverse") {
        a[1].classList.add("white")
        a[2].classList.remove("white")
        a[0].classList.remove("white")
        body.style.backgroundImage = `url(${images.images[2]})`;
    }


    if(pathname === "/exploration") {
        a[2].classList.add("white")
        a[1].classList.remove("white")
        a[0].classList.remove("white")
        body.style.backgroundImage = `url(${images.images[1]})`
    }
}