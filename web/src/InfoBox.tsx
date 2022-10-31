import './InfoBox.css';

type InfoBoxProps = {
  heading: string,
  value: string
}

const InfoBox = (props: InfoBoxProps) => {
  return (
    <div className="info-box">
      <h2>{props.heading}</h2>
      <p>{props.value}</p>
    </div>
  );
};

export default InfoBox;
