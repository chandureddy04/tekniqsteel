import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className, showText = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <svg 
        viewBox="0 0 100 110" 
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon outer border */}
        <polygon 
          points="50,2 95,27 95,77 50,102 5,77 5,27" 
          fill="none" 
          stroke="hsl(215, 90%, 35%)" 
          strokeWidth="4"
          className="drop-shadow-sm"
        />
        
        {/* Inner hexagon fill */}
        <polygon 
          points="50,8 89,30 89,74 50,96 11,74 11,30" 
          fill="hsl(215, 90%, 50%)"
          opacity="0.15"
        />
        
        {/* White inner border */}
        <polygon 
          points="50,12 85,32 85,72 50,92 15,72 15,32" 
          fill="none" 
          stroke="white" 
          strokeWidth="2"
          opacity="0.8"
        />
        
        {/* Arrow/roof at top */}
        <polygon 
          points="50,18 62,28 38,28" 
          fill="hsl(210, 10%, 60%)"
        />
        
        {/* T letter - vertical stem */}
        <rect 
          x="42" 
          y="28" 
          width="8" 
          height="40" 
          fill="url(#steelGradient)"
        />
        
        {/* T letter - horizontal top */}
        <rect 
          x="32" 
          y="28" 
          width="28" 
          height="8" 
          fill="url(#steelGradient)"
        />
        
        {/* S letter - curved shape using paths */}
        <path 
          d="M55,45 Q70,45 70,55 Q70,65 55,65 Q55,65 55,75 Q55,82 70,82" 
          fill="none" 
          stroke="hsl(215, 90%, 45%)" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 10%, 75%)" />
            <stop offset="50%" stopColor="hsl(210, 10%, 55%)" />
            <stop offset="100%" stopColor="hsl(210, 10%, 65%)" />
          </linearGradient>
        </defs>
      </svg>
      
      {showText && (
        <div className="ml-2">
          <span className="text-xl font-heading font-bold text-primary">Tekniq Steel</span>
          <p className="text-xs text-muted-foreground">Structural Excellence</p>
        </div>
      )}
    </div>
  );
};
