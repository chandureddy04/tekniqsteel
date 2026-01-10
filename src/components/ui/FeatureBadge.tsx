import { Check } from 'lucide-react';

interface FeatureBadgeProps {
  text: string;
}

export const FeatureBadge = ({ text }: FeatureBadgeProps) => {
  return (
    <div className="flex items-center bg-card px-4 py-2 rounded-lg shadow-sm border border-border/50">
      <Check className="w-5 h-5 text-success mr-2 flex-shrink-0" aria-hidden="true" />
      <span className="text-sm font-semibold text-secondary-700">{text}</span>
    </div>
  );
};
