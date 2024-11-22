import React, { ReactNode } from "react";

interface HeaderSectionProps {
  title: ReactNode;
  subtitle: ReactNode;
  titleSize?: "small" | "medium" | "large";
  subtitleSize?: "small" | "medium" | "large";
  customTitleSize?: string;
  customSubtitleSize?: string;
  align?: "left" | "center" | "right";
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  subtitle,
  titleSize = "medium",
  subtitleSize = "medium",
  customTitleSize,
  customSubtitleSize,
  align = "center",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const alignClass = alignmentClasses[align];

  const sizeClasses = {
    small: "text-sm",
    medium: "text-xl",
    large: "text-3xl",
  };

  const titleClass = customTitleSize
    ? `text-[${customTitleSize}]`
    : sizeClasses[titleSize];

  const subtitleClass = customSubtitleSize
    ? `text-[${customSubtitleSize}]`
    : sizeClasses[subtitleSize];

  return (
    <div className={`${alignClass} space-y-6`}>
      <h1 className={`${titleClass} font-400 `}>{title} <span className='text-[70px] text-[#DC0000]'>.</span></h1>
      <p className={`${subtitleClass} `}>{subtitle}</p>
    </div>
  );
};

export default HeaderSection;
