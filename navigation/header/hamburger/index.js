import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import style from './style.css';
import { Paper } from '../../../inputs/paper';
var Hamburger = function (props) {
    var _a = useState(false), isActive = _a[0], setActive = _a[1];
    var popupRef = useRef(null);
    //const handleChange = (e: Event) => {
    var handleChange = function () {
        setActive(false);
        document.removeEventListener('click', handleChange);
    };
    var toggleMenu = function () {
        if (!isActive) {
            setActive(true);
            setTimeout(function () {
                document.addEventListener('click', handleChange);
            }, 30);
        }
    };
    return (h("div", { class: style.wrapper },
        h("button", { type: 'button', class: style.hamburger + " " +
                style.hamburgerSlider + " " +
                (isActive ? style.isActive : ''), onClick: toggleMenu },
            h("span", { class: style.hamburgerBox },
                h("span", { class: style.hamburgerInner }))),
        h("div", { class: style.menuWrapper + " " + (isActive ? style.isActive : ''), ref: popupRef },
            h(Paper, { items: props.items }))));
};
export { Hamburger };
