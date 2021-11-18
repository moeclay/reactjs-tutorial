import { useCallback, useState } from 'react';
// Hook
// Default parameters adalah boolean
export const useToggle = (initialState = false) => {
    // Initialize state
    const [state, setState] = useState(initialState);
   
    // Define and memorize untuk toggle funcion
    // Function berubah kebalikan dari state sebelumnya
    const toggle = useCallback(() => setState(state => !state), []);
   
    return [state, toggle]
}