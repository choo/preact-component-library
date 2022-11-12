import Paper from '../paper';
import style from './style.module.css';

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
  onClickItem?: (any) => void,
}

export const PaperList: FunctionalComponent<Props> = (props: Props) => {
  return (
    <Paper>
      {props.items ? props.items.map((item: Item, idx: number) => {
        const code = item.code || item.text;
        const selected = props.selected && (props.selected === code);
        const onClickItem = item.onClickItem || props.onSelect || (() => {});
        const className = style.paperitem + ' ' +
                          (selected ? style.isActive + ' ' : '') +
                          (props.noBorder ? style.noBorder + ' ' : '');
        return (
          <a key={idx} class={className} onClick={() => onClickItem(code)}
             href={item.href || ('javascript: void(0)')} >{item.text}</a>
        )
      }) : props.children
      }
    </Paper>
  );
};

