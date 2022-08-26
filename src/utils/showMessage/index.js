import getComponentsRootDom from "../getComponentsRootDom";
import Icon from "@/components/Icon/index.vue";
import styles from "./message.module.less";

/**
 * 
 * @param {String} content 信息内容
 * @param {String} type 信息类型 info  error success warn
 * @param {HTMLElement} container 容器，信息会显示到该容器的正中；若不传，则显示到页面正中
 * @param {Number} duration 消息显示多久时间后消失
 */
export default function(options = {}){
    const content = options.content || "";
    const type = options.type || "info";
    const container = options.container || document.body;
    const duration = options.duration || 2000;
    const div = document.createElement("div");
    const IconDom = getComponentsRootDom(Icon, { type });

    div.innerHTML = `<span class=${styles.icon}>${IconDom.outerHTML}</span><div>${content}</div>`;

    div.className = `${styles.message} ${styles["message-" + type]}`;
    
    if(getComputedStyle(container).position === "static") {
        container.style.position = "relative";
    }

    container.appendChild(div);

    div.clientHeight;
    div.style.opacity = 1;
    div.style.transform = "translate(-50%, -50%)";

    setTimeout(()=> {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;

        div.addEventListener("transitionend",()=>{
            div.remove();
            options.callback && options.callback();
        }, {once: true})
    }, duration)


}