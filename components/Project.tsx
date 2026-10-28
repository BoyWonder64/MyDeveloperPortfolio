import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import ProjectDetails from "./ProjectDetails";

export interface Tag {
  id: string | number;
  name: string;
  path: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  images?: string[];
  tags: Tag[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  subDescription,
  href,
  image,
  images,
  tags,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);
  const projectImages = images?.length ? images : [image];

  useEffect(() => {
    if (projectImages.length < 2) return;

    const interval = window.setInterval(() => {
      setPreviewIndex((index) => (index + 1) % projectImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [projectImages.length]);

  return (
    <>
      <div className="flex items-center gap-4 py-6 sm:gap-6 sm:py-8">
        <div className="h-20 w-28 shrink-0 overflow-hidden rounded-md border border-white/10 bg-black/20 sm:h-24 sm:w-40">
          <motion.img
            key={projectImages[previewIndex]}
            src={projectImages[previewIndex]}
            alt={`${title} preview`}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xl sm:text-2xl">{title}</p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[#d6995c]">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex shrink-0 items-center gap-1 cursor-pointer hover:-translate-y-1 duration-200"
        >
          Read More
          <img src="/assets/arrow-right.svg" alt="" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          images={images}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
