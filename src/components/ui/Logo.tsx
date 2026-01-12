import { cn } from '@/lib/utils';
import tekniqLogo from '@/assets/tekniq-logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({ className, showText = false, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src={tekniqLogo} 
        alt="Tekniq Steel Logo" 
        className={cn(sizeClasses[size], "object-contain")}
      />
      
      {showText && (
        <div className="ml-2">
          <span className="text-xl font-heading font-bold text-primary">Tekniq Steel</span>
          <p className="text-xs text-muted-foreground">Structural Excellence</p>
        </div>
      )}
    </div>
  );
};
