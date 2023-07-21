import { Styledloading } from "./style";

export const Loading = () => {
  return (
    <Styledloading>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Styledloading>
  );
};
