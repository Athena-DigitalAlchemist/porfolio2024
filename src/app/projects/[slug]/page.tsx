'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/siteData';
import PageWrapper from '@/components/PageWrapper';

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div>
        <h1>Project not found</h1>
        <Link href="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <PageWrapper>
        <main className="min-h-screen pt-32 px-4 md:px-8 lg:px-16 mb-40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-16">
              {/* Left Column - Images */}
              {/* Add your image content here */}
            </div>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
