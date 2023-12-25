// components/layout/CoreValues.tsx
import React from 'react';
import Image from 'next/image';

const CoreValues: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-center mt-8">
      {/* Core Value 1 */}
      <div className="m-4">
        <Image src="/core-value-1.jpg" alt="Core Value 1" width={200} height={200} />
        <p>Core Value 1: Your message here</p>
      </div>

      {/* Core Value 2 */}
      <div className="m-4">
        <Image src="/core-value-2.jpg" alt="Core Value 2" width={200} height={200} />
        <p>Core Value 2: Your message here</p>
      </div>

      {/* Core Value 3 */}
      <div className="m-4">
        <Image src="/core-value-3.jpg" alt="Core Value 3" width={200} height={200} />
        <p>Core Value 3: Your message here</p>
      </div>

      {/* Core Value 4 */}
      <div className="m-4">
        <Image src="/core-value-4.jpg" alt="Core Value 4" width={200} height={200} />
        <p>Core Value 4: Your message here</p>
      </div>
    </section>
  );
};

export default CoreValues;