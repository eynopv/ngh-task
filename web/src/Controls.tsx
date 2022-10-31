import './Controls.css';
import { Area } from './types';

type ControlsProps = {
  values: Area[],
  active: number,
  onClick: (v: number) => void
};

const Controls = (props: ControlsProps) => {
  const renderButton = (area: Area) => {
    return (
      <button key={area.id}
              onClick={() => props.onClick(area.id)}
              className={`${ area.id === props.active ? 'active' : '' }`}
      >
        {area.name}
      </button>
    );
  };

  const buttons = props.values.map((area: Area) => renderButton(area));

  return (
    <div className="controls">
      { buttons }
    </div>
  );
};

export default Controls;
