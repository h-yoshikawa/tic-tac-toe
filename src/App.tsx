import Game from './components/Game';
import { CurrentMoveProvider } from './provider/CurrentMoveProvider';
import { HistoryProvider } from './provider/HistoryProvider';

export default function App() {
  return (
    <HistoryProvider>
      <CurrentMoveProvider>
        <Game />
      </CurrentMoveProvider>
    </HistoryProvider>
  );
}
