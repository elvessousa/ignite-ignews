import { useEffect, useState } from 'react';

export function Async() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Hello, world!</h2>
      {isButtonVisible && <button>Button</button>}
    </div>
  );
}
