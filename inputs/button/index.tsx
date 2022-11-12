import style from './style.module.css';

interface Props {
  outlined?: boolean, // 外枠のみにする
  isActive?: boolean,
  disabled?: boolean,
  onClick?: (event: any) => void,
  style?: {[s: string]: string | number},
  children?: h.JSX.Element[] | h.JSX.Element | string,
}

const Button: FunctionalComponent<Props> = (props: Props) => {
  let classes = `${style.button_root} ${style.ripple} `;
  if (props.outlined) {
    classes += style.button_outlined;
  } else {
    classes += style.button_contained;
  }
  if (props.isActive) {
    classes += ' ' + style.isactive;
  }
  return (
    <button
      className={classes}
      style={{...props.style}}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
