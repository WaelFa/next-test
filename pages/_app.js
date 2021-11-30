import { AppWrapper } from "../context/state";
// bootstrap style import
import "bootstrap/dist/css/bootstrap.min.css";

// style import
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
