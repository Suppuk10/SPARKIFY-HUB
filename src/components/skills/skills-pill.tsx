import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: string | FC<SVGProps<SVGSVGElement>>;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;

  if (typeof icon === "string") {
    return (
      <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
        <img
          src={icon}
          alt={`${name} icon`}
          className="h-5 w-5 object-contain sm:h-8 sm:w-8"
          loading="lazy"
        />
        <span className="font-medium">{name}</span>
      </div>
    );
  }

  const Icon = icon;

  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
      <span className="font-medium">{name}</span>
    </div>
  );
}
