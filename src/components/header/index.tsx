import { StylesHeader } from "./style";
import { Navigation } from "../navigation/index"

export function Header() {
  return (
    <StylesHeader>
      <div className="container">
        <div className="head">
          <div className="name">
            <h1>natanga<span>.</span></h1>
            <h2>Natã Fernandes</h2>
          </div>
          <Navigation />
        </div>
      </div>
    </StylesHeader>
  );
}
