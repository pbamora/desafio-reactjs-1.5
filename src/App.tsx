import { RepositoryList } from "./components/RepositoryList";
import { Header } from "./components/Header";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <RepositoryList />
    </>
  );
}
