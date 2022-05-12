import url from "@/assets/loading.svg";
import style from "./loading.module.less";

export default function(el, binding){
    const curImg = getLoadingImg(el);
    if(binding.value) {
        if(!curImg) {
            const img =  creaateLoadingImg();
            el.appendChild(img);
        }
    } else {
        if(curImg) {
            curImg.remove();
        }
    }
}

// 判断el中是否存在loading效果的存在
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]");
}
// 创建img元素
function creaateLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = url;
    img.className = style.loading;
    return img;
}