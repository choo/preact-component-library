import { h, FunctionalComponent } from 'preact';

/**
 * component for grid layout
 */

interface Props {
  container?: boolean,
  m?: string,
  p?: string,
  flex?: number,
  alignItems?: string, // center, baseline, ...
  justify?: string,
  style?: {[s: string]: string | number},
  children?: h.JSX.Element[] | h.JSX.Element | string,
}

const Grid: FunctionalComponent<Props> = (props: Props) => {
  const gridStyle = {
    display: props.container ? 'flex' : '',
    margin : props.m || '',
    padding: props.p || '',
    flex: props.flex || '',
    alignItems: props.alignItems || '',
    justifyContent: props.justify || '',
    justifyItems: props.justify || '',
    ...props.style
  };

  return (
    <div style={gridStyle}>
      {props.children}
    </div>
  );
};

export default Grid;
