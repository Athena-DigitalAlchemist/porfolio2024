'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectImage({ src, alt, priority = false }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      className="relative aspect-[4/3] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0.5 : 1 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        quality={75}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </motion.div>
  );
} 