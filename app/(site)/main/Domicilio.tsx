import { Badge } from "@/components/ui/badge";
import Row from "./components/Row";
import Cell from "./components/Cell";

export default function Domicilio() {
  const rows = [];
  for (let i = 0; i < 50; i++) {
    rows.push(
      <Row>
        <Cell width={10}>20:00</Cell>
        <Cell width={32}>Via di Romagna 9/1</Cell>
        <Cell width={32}>21:00</Cell>
        <Cell width={10}>999.99 E</Cell>
        <Cell width={16}>AAAA</Cell>
      </Row>
    );
  }

  return (
    <div className="flex flex-col justify-evenly p-5 pb-[25px] gap-3 h-screen">
      <div className="bg-black text-white flex items-center justify-center h-10">
        <p>Domicilio</p>
      </div>

      <div className="flex justify-around">
        <Badge>Tutte</Badge>
        <Badge>Preparando</Badge>
        <Badge>In consegna</Badge>
        <Badge>Consegnate</Badge>
      </div>

      <div className="overflow-auto h-[752px]">
        <Row>
          <Cell width={10}>ORA</Cell>
          <Cell width={32}>INDIRIZZO</Cell>
          <Cell width={32}>CLIENTE</Cell>
          <Cell width={10}>ARRIVO</Cell>
          <Cell width={16}>TOTALE</Cell>
        </Row>

        {rows}
      </div>
    </div>
  );
}
