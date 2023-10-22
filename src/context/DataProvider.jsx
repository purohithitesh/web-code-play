import { createContext} from 'react';

import useLocalStorage from '../hooks/useLocalStorage';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useLocalStorage('html', '');
    const [js, setJs] = useLocalStorage('css', '');
    const [css, setCss] = useLocalStorage('js', '');

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;