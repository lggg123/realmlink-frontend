// components/layout/CoreValues.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const CoreValues: React.FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const fadeInCoreValues1 = useSpring({
    opacity: inView1 ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [ref2, inView2] = useInView({ triggerOnce: true });
  const fadeInCoreValues2 = useSpring({
    opacity: inView2 ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [ref3, inView3] = useInView({ triggerOnce: true });
  const fadeInCoreValues3 = useSpring({
    opacity: inView3 ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [ref4, inView4] = useInView({ triggerOnce: true });
  const fadeInCoreValues4 = useSpring({
    opacity: inView4 ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <section className="flex flex-col text-white justify-center">
      {/* Core Value 1 */}
      <div className={`m-8`}>
        <h1 className={`text-4xl text-center font-bold mb-8`}>Freedom</h1>
        <Image src="/freedom.png" alt="Core Value 1" width={630} height={630} />
      </div>

      {/* Core Value 2 */}
      <div className={`m-8`}>
      <h1 className={`text-4xl text-center font-bold mb-20`}>Community</h1>
        <Image src="/community.png" alt="Core Value 2" width={630} height={630} />
      </div>

      {/* Core Value 3 */}
      <div className={`m-8`}>
      <h1 className={`text-4xl text-center font-bold mb-20`}>Innovation</h1>
        <Image src="/Innovation.png" alt="Core Value 3" width={630} height={630} />
      </div>

      {/* Core Value 4 */}
      <div className={`m-8`}>
      <h1 className={`text-4xl text-center font-bold mb-20`}>Immersion</h1>
        <Image src="/Immersion.png" alt="Core Value 4" width={630} height={630} />
      </div>
    </section>
  );
};

export default CoreValues;