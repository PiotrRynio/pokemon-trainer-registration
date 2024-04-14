"use client";
type DynamicTimeProps = {};

export const DynamicTime = ({}: DynamicTimeProps) => {
  return (
    <div>
      ----------------------------
      <div>DynamicTime component</div>
      <div>{String(new Date())}</div>
      ----------------------------
    </div>
  );
};
