import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Store} from  './components/Store';
import {ContextProvider} from './context';

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Store />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
