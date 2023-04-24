import React, { PropsWithChildren, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { isString } from "../utils/check";
import "./Collapse.less";

interface Props extends PropsWithChildren {
  count?: number;
  collapseIcon?: (open: boolean) => ReactNode;
  label?: string;
}
export default function Collapse({
  count = 2,
  children,
  collapseIcon,
  label = "下拉展开"
}: Props) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>(0);
  const toggleStatus = () => setOpen(!open);
  useEffect(() => {
    setHeight(container.current?.scrollHeight || "auto");
    if (open) {
      setTimeout(() => {
        setHeight("auto");
      }, 1000);
    } else {
      setTimeout(() => {
        setHeight(0);
      }, 60);
    }
  }, [open]);
  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => {
          if (index < count) {
            return child;
          }
          return null;
        })}
      </div>
      <div
        ref={container}
        className={"collapse"}
        style={{ height: isString(height) ? height : `${height}px` }}
      >
        {React.Children.map(children, (child, index) => {
          if (index >= count) {
            return child;
          }
          return null;
        })}
      </div>
      <div className={"collapseIconContainer"}>
        {label && (
          <span className={"label"} onClick={toggleStatus}>
            {open ? "点击收起" : label}
          </span>
        )}
        {collapseIcon ? (
          collapseIcon(open)
        ) : (
          <svg
            className={"collapseIcon" + " " + (open ? "iconOpen" : "")}
            onClick={toggleStatus}
            t="1682235544284"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2599"
            width="20"
            height="20"
          >
            <path
              d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z"
              fill="#CCCCCC"
              p-id="2600"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
}
