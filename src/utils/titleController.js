// 网站标题控制
let routeTitle = "", siteTitle = "";
function setTitle() {
    if(!routeTitle && !siteTitle) {
        document.title = "Loading...";
    } else if(routeTitle && !routeTitle) {
        document.title = routeTitle;
    } else if(!routeTitle && siteTitle) {
        document.title = siteTitle;
    } else {
        document.title = `${routeTitle}-${siteTitle}`;
    }
}

export default {
    // 设置路由标题
    setRouterTitle(title) {
        routeTitle = title;
        setTitle();
    },
    // 设置网站标题
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    }
}



