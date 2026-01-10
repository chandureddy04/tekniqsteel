interface StatBadgeProps {
  value: string;
  label: string;
  variant?: 'accent' | 'success';
  position?: 'top-right' | 'bottom-left';
}

export const StatBadge = ({ 
  value, 
  label, 
  variant = 'accent',
  position = 'top-right' 
}: StatBadgeProps) => {
  const positionClasses = position === 'top-right' 
    ? '-top-4 -right-4' 
    : '-bottom-4 -left-4';
  
  const variantClasses = variant === 'accent' 
    ? 'bg-accent' 
    : 'bg-success';

  return (
    <div 
      className={`absolute ${positionClasses} ${variantClasses} text-white px-4 py-2 rounded-lg shadow-lg`}
    >
      <p className="text-sm font-bold">{value}</p>
      {label && <p className="text-xs opacity-90">{label}</p>}
    </div>
  );
};
