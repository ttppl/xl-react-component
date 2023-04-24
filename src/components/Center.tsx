import { PropsWithChildren, useMemo } from "react";
import { isNumber } from "../utils/check";

interface Props extends PropsWithChildren {
  width?: number | string;
  height?: number | string;
  inline?: boolean;
}

export default function Center({
  children,
  width,
  height,
  inline = false
}: Props) {
  const styles = useMemo(() => {
    const style = {
      display: inline ? "inline-flex" : "flex",
      justifyContent: "center",
      alignItems: "center",
      width: isNumber(width) ? `${width}px` : width,
      height: isNumber(height) ? `${height}px` : height
    };
    return style;
  }, [width, height, inline]);
  return <div style={styles}>{children}</div>;
}
