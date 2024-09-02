import GameHeader from "../features/My Games/GameHeader";
import TrendGame from "../features/My Games/TrendGame";
import AdCast from "../features/My Games/AdCast";
import TrendingGames from "../features/My Games/TrendingGames";
import GameList from "../features/My Games/GameList";

function ViewGames() {
  return (
    <div>
      <GameHeader />
      <TrendGame />
      <AdCast />
      <TrendingGames />
      <GameList />
    </div>
  );
}

export default ViewGames;
