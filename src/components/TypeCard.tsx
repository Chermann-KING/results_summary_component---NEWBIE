/**
 * TypeCard Component
 *
 * Renders a performance metric card with dynamic styling based on the metric type.
 * Each card displays an icon, title, and score with consistent styling patterns.
 *
 * @component
 * @example
 * ```jsx
 * <TypeCard title="Reaction" score={80} />
 * ```
 */
import { FC } from "react";
import { ZapIcon, Brain, MessageCircleMore, Eye } from "lucide-react";

interface TypeCardProps {
  /** Category title that determines styling and icon */
  title: string;
  /** Performance score (0-100) */
  score: number;
}

const TypeCard: FC<TypeCardProps> = ({ title, score }) => {
  // Style mappings for each card type
  const styles = {
    Reaction: {
      bg: "bg-primary-redTransparent",
      text: "text-primary-red",
      icon: ZapIcon,
    },
    Memory: {
      bg: "bg-primary-yellowTransparent",
      text: "text-primary-yellow",
      icon: Brain,
    },
    Verbal: {
      bg: "bg-primary-tealTransparent",
      text: "text-primary-teal",
      icon: MessageCircleMore,
    },
    Visual: {
      bg: "bg-primary-blueTransparent",
      text: "text-primary-blue",
      icon: Eye,
    },
  };

  const style = styles[title as keyof typeof styles];
  const IconComponent = style.icon;

  return (
    <div
      className={`flex justify-between items-center ${style.bg} rounded-xl px-5 py-4`}
    >
      <div className="flex items-center gap-4 sm:text-[1rem] md:text-[1rem] lg:text-[1.125rem]">
        <IconComponent className={`w-5 h-5 ${style.text}`} />
        <h3 className={`font-medium ${style.text}`}>{title}</h3>
      </div>
      <p className="text-neutral-grayBlue font-bold">
        <span>{score}</span> <span className="opacity-50">/ 100</span>
      </p>
    </div>
  );
};

export default TypeCard;
