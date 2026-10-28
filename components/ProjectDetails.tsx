import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface Tag {
  id: string | number;
  name: string;
  path: string;
}

interface ProjectDetailsProps {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  images?: string[];
  tags: Tag[];
  href?: string;
  closeModal: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  subDescription,
  image,
  images,
  tags,
  href,
  closeModal,
}) => {
  const projectImages = images?.length ? images : [image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = projectImages[activeImageIndex];

  useEffect(() => {
    if (projectImages.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveImageIndex((index) => (index + 1) % projectImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [images, image]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-[#06091f] to-[#161a31] border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-[#06091f] hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <div className="flex h-[32vh] w-full items-center justify-center overflow-hidden rounded-t-2xl bg-black/10">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={title}
            className="h-full w-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription &&
            subDescription.map((subDesc, index) => (
              <p key={index} className="mb-3 font-normal text-neutral-400">
                {subDesc}
              </p>
            ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover:-translate-y-1 duration-200"
                />
              ))}
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover:-translate-y-1 duration-200 text-[#d6995c]"
              >
                View Project
                <img src="assets/arrow-up.svg" className="size-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
