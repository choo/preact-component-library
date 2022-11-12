import { Component, useState, useRef } from 'react';
import style from './style.module.css';
import {Item, PaperList} from '../../../inputs/paperlist';


interface Props {
  items?: Item[],
  children?: h.JSX.Element[] | h.JSX.Element | string,
}
type HamburgerItems = Item[];
const BUTTON_LABEL_NAME = 'Hamburger Menu';

const Hamburger: Component<Props> = (props: Props) => {
  const [isActive, setActive] = useState<boolean>(false);
  const popupRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    setActive(false);
    document.removeEventListener('click', handleChange);
  };
  const toggleMenu = () => {
    if (!isActive) {
      setActive(true);
      setTimeout(() => {
        document.addEventListener('click', handleChange);
      }, 30);
    }
  }

  return (
    <div>
      <button type='button'
        className={
          style.hamburger + " " +
          style.hamburgerSlider + " " +
          (isActive ? style.isActive : '')
        }
        aria-label={BUTTON_LABEL_NAME}
        aria-pressed={isActive ? "true" : "false"}
        onClick={toggleMenu}
      >
        <span className={style.hamburgerBox}>
          <span className={style.hamburgerInner}></span>
        </span>
      </button>

      <div
        className={`${style.menuWrapper} ${isActive ? style.isActive : ''}`}
        ref={popupRef}
      >
        {props.items ? (
          <PaperList items={props.items} />
        ) : (
          <PaperList children={props.children} />
        )}
      </div>
    </div>
  );
};

export {HamburgerItems, Hamburger};
