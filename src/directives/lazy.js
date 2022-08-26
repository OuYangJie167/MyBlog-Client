import eventBus from "@/eventBus";
import debounce from "@/utils/debounce.js";
import defaultGif from "@/assets/default.gif";

let imgs = [];
function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}

function setImage(img) {
    img.dom.src = defaultGif;
    const rect = img.dom.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const height = rect.height || 150;
    if(rect.top >= -height && rect.top <= clientHeight) {
        img.dom.src = img.src;
        imgs = imgs.filter((i) => i !== img);
    }
}

function handleScroll() {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {    
    bind(el,bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        };
        imgs.push(img),
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter((img) => img.dom !== el);
    }
};




