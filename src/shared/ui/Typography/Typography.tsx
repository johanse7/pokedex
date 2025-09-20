import React from "react";
import styles from "./Typography.module.css";

type Variant =
  | "headlineBold"
  | "subtitle1Bold"
  | "subtitle2Bold"
  | "subtitle3Bold"
  | "body1Regular"
  | "body2Regular"
  | "body3Regular"
  | "captionRegular";

type TypographyProps<T extends React.ElementType = "p"> = {
  variant?: Variant;
  tag?: T;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Typography = <T extends React.ElementType = "p">({
  tag,
  variant = "body1Regular",
  children,
  className,
  ...rest
}: TypographyProps<T>) => {
  const Tag = tag || "p";

  return (
    <Tag className={`${styles[variant]} ${className ?? ""}`} {...rest}>
      {children}
    </Tag>
  );
};
