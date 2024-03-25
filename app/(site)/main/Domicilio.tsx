import { Badge } from "@/components/ui/badge";
import Row from "./components/Row";
import Cell from "./components/Cell";

export default function Domicilio() {
  const rows = [];
  for (let i = 0; i < 50; i++) {
    rows.push(
      <Row>
        <Cell width={10}>20:00</Cell>
        <Cell width={35} fontSize={"smaller"} alignment={"start"}>
          Via di Romagna 9/1 ciao ciao
        </Cell>
        <Cell width={30} fontSize={"smaller"} alignment={"start"}>
          ALESSANAAAAAAAAADRO CECCHINIAAAAAAAAAAA
        </Cell>
        <Cell width={10}>21:00</Cell>
        <Cell width={10}>AAAA</Cell>
      </Row>
    );
  }

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="bg-black text-white flex items-center justify-center h-12 rounded-sm">
        <p className="text-3xl">Domicilio</p>
      </div>

      <div className="flex justify-around">
        <Badge>Tutte (00)</Badge>
        <Badge>Preparando (00)</Badge>
        <Badge>In consegna (00)</Badge>
        <Badge>Consegnate (00)</Badge>
      </div>

      <div className="overflow-auto h-[802px]">
        <Row>
          <Cell width={10}>ORA</Cell>
          <Cell width={35}>INDIRIZZO</Cell>
          <Cell width={30}>CLIENTE</Cell>
          <Cell width={10}>ARRIVO</Cell>
          <Cell width={10}>TOTALE</Cell>
        </Row>

        {rows}
      </div>
    </div>
  );
}
