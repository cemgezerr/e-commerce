import "./App.css";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./Container/PageContainer";
import Loading from '../src/components/Loading'

function App() {
  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Loading />
    </PageContainer>
  );
}

export default App;
