import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import PageContainer from "./Container/PageContainer";

function App() {
  return (
    <PageContainer>
      <Header />
      <ProductList />
    </PageContainer>
  );
}

export default App;
