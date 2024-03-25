import { Badge } from "@/components/ui/badge";
import Row from "./components/Row";
import Cell from "./components/Cell";

export default function AsportoTavolo() {
  const rows = [];
  for (let i = 0; i < 50; i++) {
    rows.push(
      <Row>
        <Cell width={15}>20:00</Cell>
        <Cell width={45} alignment={"start"} fontSize={"smaller"}>
          ALESSANDROOOOOOOOOOO CECCHINIIIIIIIIIIIIIIIIII
        </Cell>
        <Cell width={20}>21:00</Cell>
        <Cell width={20} alignment={"end"}>
          999.99 €
        </Cell>
      </Row>
    );
  }

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="bg-black text-white flex items-center justify-center h-12 rounded-sm">
        <p className="text-3xl">Asporto / Tavolo</p>
      </div>

      {/* TODO: al 99% il badge diventa un component user client per farli funzionare*/}
      <div className="flex justify-around w-full">
        <Badge>Tutte (00)</Badge>
        <Badge>Preparando (00)</Badge>
        <Badge>Ritirate (00)</Badge>
      </div>

      <div className="overflow-auto h-[602px]">
        <Row>
          <Cell width={15}>ORA</Cell>
          <Cell width={45}>CLIENTE</Cell>
          <Cell width={20}>RITIRO</Cell>
          <Cell width={20}>TOTALE</Cell>
        </Row>

        {rows}
      </div>
    </div>
  );
}
