import { useRecoilState } from "recoil";

import { minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  return (
    <div>
      <input value={minutes} type="number" placeholder="Minutes" />
      <input type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
