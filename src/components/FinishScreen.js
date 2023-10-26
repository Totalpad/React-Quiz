function FinishScreen({ points, maxPoints, dispatch }) {
  const procentage = (points / maxPoints) * 100;

  let emoji;
  if (procentage === 100) emoji = "🥇";
  if (procentage >= 80 && procentage < 100) emoji = "🥈";
  if (procentage >= 50 && procentage < 80) emoji = "🥉";
  if (procentage <= 50) emoji = "😱😬";
  if (procentage === 0) emoji = "🤢";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(procentage)}% )
      </p>
      <button className="btn btn-ui" onClick={()=>dispatch({type: "restart"})}>Restart</button>
    </>
  );
}

export default FinishScreen;
