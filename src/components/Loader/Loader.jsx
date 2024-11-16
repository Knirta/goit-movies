import { Bars } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.wrap}>
      <Bars
        height="80"
        width="80"
        color="rgb(189, 60, 82)"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
