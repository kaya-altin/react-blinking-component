import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

import classes from "./index.styles";

type TType = "backgroundColor" | "opacity" | "color";

interface IProps {
  type: TType;
  children?: React.ReactNode;
  className?: any;
  timeout?: number;
  visible: boolean;
  color?: string;
  backgroundColor?: string;
  transform?: string;
  fromOpacity?: string;
  toOpacity?: string;
}

export default function BlinkingComponent({
  children,
  className,
  visible = false,
  timeout = 500,
  type = "backgroundColor",
  color = "#e7e7e7",
  backgroundColor = "#ffffdb",
  transform = "",
  fromOpacity = "1",
  toOpacity = ".3",
}: IProps) {
  const [blink, setBlink] = useState(false);
  const timer = useRef<any>();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    if (!blink && visible) {
      setBlink(true);

      timer.current = setTimeout(() => {
        setBlink(false);
      }, timeout);
    }
  }, [visible]);

  const rootClasses = clsx(
    classes.container(fromOpacity),
    "blinking-component",
    {
      [classes.highlightColor(color)]: blink && type === "color",
      [classes.highlightBackground(backgroundColor, transform)]:
        blink && type === "backgroundColor",
      [classes.highlightOpacity(toOpacity)]: blink && type === "opacity",
      [className]: className,
    }
  );

  return <div className={rootClasses}>{children}</div>;
}
