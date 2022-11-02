export default function Dice(props) {
  const { value, hold, toggleHoldDie } = props;

  return (
    <>
      <div className={`dice ${hold && 'hold'}`} onClick={toggleHoldDie}>
        <h2>{value}</h2>
      </div>
    </>
  );
}
