interface CellProps {
  children: any;
  width: number;
  fontSize?: string;
  allignment?: string;
}

export default function Cell({
  children,
  width,
  fontSize,
  allignment,
}: CellProps) {
  const cellWidth = `${width}%`;
  const style = { width: cellWidth };

  let classes = "h-full flex items-center border-r-2 border-black ";
  switch (allignment) {
    case "start":
      classes += "justify-start pl-[10px] ";
      break;
    case "end":
      classes += "justify-end pr-[10px] ";
      break;
    default:
      classes += "justify-center ";
      break;
  }

  classes += fontSize == "smaller" ? "text-md" : "text-xl";

  // using ${width}% in the classes sometimes the % width is not applied
  // Tailwind literally doesn't apply the class
  // a fix is injecting the width directly with the styles attribute

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
}
