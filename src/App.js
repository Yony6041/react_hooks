import './App.css';
import StateTutorial from '../src/useState/StateTutorial';
import ReducerTutorial from '../src/useReducer/ReducerTutorial';
import EffectTutorial from './useEffect/EffectTutorial';
import RefTutorial from './UseRef/RefTutorial';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
import ImperativeHandle from './useImperativeHandle/ImperativeHandle';
import ContextTutorial from './UseContext/ContextTutorial';
import MemoTutorial from './UseMemo/MemoTutorial';
function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial/>
      <ImperativeHandle/>
      <ContextTutorial/>
      <MemoTutorial/>
    </div>
  );
}

export default App;
