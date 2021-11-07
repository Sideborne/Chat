import { Message } from "./Components/Message";


export default function App() {
  return (
    <div>
      <h1>Ниже будет компонент с props ввиде текста "My text"</h1>
      <Message myText='My (^.^) TxT' />
    </div>
  );
};