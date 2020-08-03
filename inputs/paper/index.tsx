import { h, FunctionalComponent } from 'preact';
import style from './style.css';

interface Props {
  onSelect?: (code: string | number) => void,
  noBorder?: boolean,
  selected?: string | number,
  items?: Item[],
  children?: h.JSX.Element[] | h.JSX.Element | string,
}

export interface Item {
  text: string,
  code?: string | number,
  href?: string,
}

export const Paper: FunctionalComponent<Props> = (props: Props) => {
  let classes = style.paper;
  if (props.noBorder) {
    classes += style.noBorder;
  }
  const onSelect = props.onSelect || (() => {});
  return (
    <div class={classes}>
      {props.items ? props.items.map((item: Item, idx: number) => {
        const code = item.code || item.text;
        const selected = props.selected && (props.selected === code);
        return (
          <a key={idx}
            class={`${style.paperitem} ${selected ? style.isActive : ''}`}
            onClick={() => onSelect(code)}
            href={item.href || ('javascript: void(0)')}
          >
            {item.text}
          </a>
        )
      }) : props.children
      }
    </div>
  );
};

