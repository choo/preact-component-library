import { h, FunctionalComponent } from 'preact';
import { useState, useRef } from 'preact/hooks';
import style from './style.css';
import {Item, PaperList} from '../../../inputs/paperlist';


interface Props {
  items: Item[],
}
type HamburgerItems = Item[];

const Hamburger: FunctionalComponent<Props> = (props: Props) => {
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
    <div class={style.wrapper}>
      <button type='button'
        class={
          style.hamburger + " " +
          style.hamburgerSlider + " " +
          (isActive ? style.isActive : '')
        }
        onClick={toggleMenu}
      >
        <span class={style.hamburgerBox}>
          <span class={style.hamburgerInner}></span>
        </span>
      </button>

      <div
        class={`${style.menuWrapper} ${isActive ? style.isActive : ''}`}
        ref={popupRef}
      >
        <PaperList items={props.items} />
      </div>
    </div>
  );
};

export {HamburgerItems, Hamburger};
