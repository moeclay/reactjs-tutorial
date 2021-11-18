import { useToggle } from './useToggle';
 
function App() {
    // Memanggil Toggle Custom Hooks
    const [isTextChanged, setIsTextChanged] = useToggle();
   
    return (
       <div>
         <h1>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</h1>
          <button onClick={setIsTextChanged}> Hooks Button</button>
       </div>
    );
}
 
export default App;