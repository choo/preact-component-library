import { useState, useRef } from 'react';
import style from './style.module.css';
import Button from '../button';
import {Item, PaperList} from '../paperlist';


interface Props {
  buttonText: string, // display text for on button
  items?: Item[], // menu contents
  selected?: string | number,
  keepDisplay?: boolean, // keep menu displayed when menu item is clicked
  width?: string | number,
  onSelect?: (code: string | number) => void,
  style?: {[s: string]: string | number},
}

/**
 *    style : (optional) style settings such as menu position
 *      ex.) list should be display on upper right, the following should be given
 *        style={{
 *          bottom: '2.0rem',
 *          transformOrigin: 'bottom left',
 *        }}
 */
const Menu: FunctionalComponent<Props> = (props: Props) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const popupRef = useRef<HTMLInputElement>(null);

  const getCurrentText = (items: Item[], selectedCode: number | string) => {
    for (let item of items) {
      if (item.code === selectedCode) {
        return item.text;
      }
    }
    return '-';
  }

  const handleOutsideClick = (e: Event) => {
    if (!props.keepDisplay ||
          !popupRef.current.contains(e.target as HTMLInputElement)) {
      setIsShown(false);
      document.removeEventListener('click', handleOutsideClick);
    }
  };

  const handleToggleButtonClick = () => {
    if (!isShown) {
      setIsShown(true);
      /* without setTimeout, popup menu won't open
       * because documentClickHandler.current will be executed */
      setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
      }, 30);
    }
  }

  return (
    <div className={style.wrapper} style={props.width ? {width: props.width} : {}}>
      <label className={style.label}>{props.buttonText}</label>
      <Button outlined
        onClick={handleToggleButtonClick}
        style={{justifyContent: 'left',}}
      >
        {getCurrentText(props.items || [], props.selected || '')}
      </Button>
      <svg className={style.caret} height="24" viewBox="0 0 24 24" width="24"
        onClick={handleToggleButtonClick}
      >
        <path d="M7 10l5 5 5-5z"></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>

      <div
        className={`${style.menu} ${isShown ? style.shown : ''}`}
        style={props.style} // bottom: OOpx...
        ref={popupRef}
      >
        <PaperList
          onSelect={props.onSelect}
          selected={props.selected}
          items={props.items}
        />
      </div>

    </div>
  );
};

export default Menu;
