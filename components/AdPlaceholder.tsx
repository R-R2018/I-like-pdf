
import React from 'react';

interface AdPlaceholderProps {
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className }) => {
  return (
    <div className={className}>
      Adsterra Ad Placeholder
    </div>
  );
};

export default AdPlaceholder;
