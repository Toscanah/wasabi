interface RowProps {
  children: any;
}

export default function Row({ children }: RowProps) {
  // TODO: teoricamente la riga può venire selezionata
  // chiedere il motivo e a cosa servirebbe
  
  let classes =
    "w-full h-[50px] flex items-center border-t-2 border-x-2 border-black [&>*:last-child]:border-none " +
    "first:font-bold first:sticky first:top-0 first:z-10 first:bg-cyan-600 " +
    "last:border-b-2 last:border-black " +
    "[&:not(:first-child)]:hover:cursor-pointer";
  return <div className={classes}>{children}</div>;
}
