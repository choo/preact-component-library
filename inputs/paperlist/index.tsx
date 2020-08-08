import { h, FunctionalComponent } from 'preact';
import Paper from '../paper';
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

export const PaperList: FunctionalComponent<Props> = (props: Props) => {
  const onSelect = props.onSelect || (() => {});
  return (
    <Paper>
      {props.items ? props.items.map((item: Item, idx: number) => {
        const code = item.code || item.text;
        const selected = props.selected && (props.selected === code);
        return (
          <a key={idx}
            class={`${style.paperitem} ${selected ? style.isActive : ''} ${props.noBorder ? style.noBorder : ''}`}
            onClick={() => onSelect(code)}
            href={item.href || ('javascript: void(0)')}
          >
            {item.text}
          </a>
        )
      }) : props.children
      }
    </Paper>
  );
};

