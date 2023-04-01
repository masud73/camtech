import React, { useState } from "react";



function ReadMore({ children, maxLength }) {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);
  
    const toggleTruncated = () => {
      setIsTruncated(!isTruncated);
    };
  
    const displayText = isTruncated? text.slice(0, maxLength): text;
  
    return (
      <div style={{ color: 'inherit', whiteSpace: 'pre-wrap' }}>
        {displayText}
        <span
          onClick={toggleTruncated}
          style={{ cursor: 'pointer', color: 'dodgerblue' }}
        >
          {isTruncated ? 'Read more' : ' Read less'}
        </span>
      </div>
    );
  }
  
  
  
  export default ReadMore;