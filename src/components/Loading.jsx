import { Loader } from "react-feather";
import "./Loading.css";
import { useState } from "react";

export default function Loading() {
  const [active, setActive] = useState(true);
  setTimeout(() => {
    if (active) {
      setActive(false);
    }
  }, 1500);
  return (
    <>
      <section className={`loading ${active ? "" : "nonactive"}`}>
        <div className="loader">
          <div className="pre">
            <Loader />
          </div>
          <p>Sugeng Rawuh Sepuh!!!</p>
        </div>
      </section>
    </>
  );
}
