import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div className={css({ bg: "red.700", h: "100vh", color: "primary" })}>
      Music is the food for the soul
    </div>
  );
}
