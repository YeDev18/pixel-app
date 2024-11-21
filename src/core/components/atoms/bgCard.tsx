import React, { ReactNode } from 'react';

interface BgCardProps {
  children?: ReactNode;
  height?: string;
  width?: string;
}

export default function BgCard({
  children,
  height = '100vh',
  width = '100%',
}: BgCardProps) {
  return (
    <div
      className="makingContactBg flex items-center justify-center rounded-3xl bg-cover bg-no-repeat"
      style={{
        height,
        width,
      }}
    >
      {children}
    </div>
  );
}
