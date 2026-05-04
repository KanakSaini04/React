import React, { useEffect, useRef } from 'react';

const AdBanner = ({ 
  dataAdSlot, 
  dataAdFormat = 'auto', 
  dataFullWidthResponsive = 'true', 
  dataAdLayout, 
  width, 
  height, 
  className = '' 
}) => {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      // Ensure the script is loaded and we don't push the ad multiple times to the same slot
      if (typeof window !== 'undefined') {
        const adsbygoogle = window.adsbygoogle || [];
        // Only push if the ad hasn't been initialized yet
        if (adRef.current && adRef.current.getAttribute('data-adsbygoogle-status') !== 'done') {
          adsbygoogle.push({});
        }
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div 
      className={`ad-container ${className}`} 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        margin: '2rem auto',
        width: '100%',
        maxWidth: width ? `${width}px` : '100%',
        overflow: 'hidden'
      }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ 
          display: 'inline-block', 
          width: width ? `${width}px` : '100%', 
          height: height ? `${height}px` : 'auto',
          minHeight: '100px',
          backgroundColor: 'rgba(0,0,0,0.3)', 
          border: '1px dashed rgba(255, 255, 255, 0.08)', 
          borderRadius: '8px'
        }}
        data-ad-client="ca-pub-2179799307156186"
        data-ad-slot={dataAdSlot}
        data-ad-layout={dataAdLayout}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive}
      />
    </div>
  );
};

export default AdBanner;
