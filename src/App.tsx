import { ApolloProvider } from "@apollo/client/react";
import { Provider } from "react-redux";
import { AppRouter } from "./app";
import { client } from "./app/apollo/client";
import { store } from "./app/store";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
