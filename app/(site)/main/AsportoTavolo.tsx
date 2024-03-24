import { Badge } from "@/components/ui/badge";
import Row from "./components/Row";
import Cell from "./components/Cell";

export default function AsportoTavolo() {
  const rows = [];
  for (let i = 0; i < 50; i++) {
    rows.push(
      <Row>
        <Cell width={15}>20:00</Cell>
        <Cell width={50} allignment={"start"} fontSize={"smaller"}>
          ALESSANDRO
        </Cell>
        <Cell width={15}>21:00</Cell>
        <Cell width={20} allignment={"end"}>
          999.99 E
        </Cell>
      </Row>
    );
  }

  return (
    <div className="flex flex-col justify-evenly p-5 gap-3">
      <div className="bg-black text-white flex items-center justify-center h-10">
        <p>Asporto / Tavolo</p>
      </div>

      <div className="flex justify-around">
        <Badge>Tutte</Badge>
        <Badge>Preparando</Badge>
        <Badge>Ritirate</Badge>
      </div>

      <div className="overflow-auto h-[502px]">
        <Row>
          <Cell width={15}>ORA</Cell>
          <Cell width={50}>CLIENTE</Cell>
          <Cell width={15}>RITIRO</Cell>
          <Cell width={20}>TOTALE</Cell>
        </Row>

        {rows}
      </div>
    </div>
  );
}
