import GameHeader from "../features/My Games/GameHeader";
import TrendGame from "../features/My Games/TrendGame";
import AdCast from "../features/My Games/AdCast";

function ViewGames() {
  return (
    <div>
      <GameHeader />
      <TrendGame />
      <AdCast />
    </div>
  );
}

export default ViewGames;
