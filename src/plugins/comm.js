var comm={
    getQueryString (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return r[2];
        }
        else {
            return "";
        }
    },
    hasClass(elements, cName){
        return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    },
    addClass (elements, cName) {
        if (!this.hasClass(elements, cName)) {
            if (elements.className) {
                elements.className += " " + cName;
            } else {
                elements.className += cName;
            }
        }
    },
    removeClass(elements, cName) {
        if (this.hasClass(elements, cName)) {
            elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), "");
        }
    },
    height(elements) {
        //处理两个特殊的高 window document
        if (elements == window) {
            return document.documentElement.clientHeight || document.body.clientHeight
        } else if (elements == document) {
            return document.documentElement.scrollHeight || document.body.scrollHeight
        } else if (typeof elements == "object") {
            return elements.offsetHeight;
        } else if (typeof elements == "string") {
            return document.getElementById(elements).offsetHeight;
        }
    },
    width (elements) {
        //处理两个特殊 window document
        if (elements == window) {
            return document.documentElement.clientWidth || document.body.clientWidth
        } else if (elements == document) {
            return document.documentElement.scrollWidth || document.body.scrollWidth
        } else if (typeof elements == "object") {
            return elements.offsetWidth;
        } else if (typeof elements == "string") {
            return document.getElementById(elements).offsetWidth;
        }
    },
    //滚动条位置
    scrollTop() {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
};
export default comm;