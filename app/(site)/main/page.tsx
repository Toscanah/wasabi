import FormNominativi from "./FormNominativi";
import AsportoTavolo from "./AsportoTavolo";
import Domicilio from "./Domicilio";

export default function Main() {
  return (
    <div className="flex w-full  justify-between h-screen">
      <div className=" w-[36%]">
        <FormNominativi />
        <AsportoTavolo />
      </div>
      {/* // TODO: quando si scrollano le celle
      Si vede le la head row non ha il margine sotto
      sarebbe da dargli a lui il bottom border
      e poi gestire tutti gli altri bordi delle righe */}
      <div className="w-[64%]">
        <Domicilio />
      </div>
    </div>
  );
}
