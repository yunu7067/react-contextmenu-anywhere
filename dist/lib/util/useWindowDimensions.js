import { useState, useEffect } from "react";
function getWindowDimensions() {
    var width = window.innerWidth, height = window.innerHeight;
    return {
        width: width,
        height: height,
    };
}
export default function useWindowDimensions() {
    var _a = useState(getWindowDimensions()), windowDimensions = _a[0], setWindowDimensions = _a[1];
    useEffect(function () {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowDimensions;
}
//# sourceMappingURL=useWindowDimensions.js.map