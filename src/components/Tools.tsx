import React from "react";
import {
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/react";

const Tools = () => {
  const tools = [
    {
      title: "AI Article Writer",
      description:
        "Generate compelling, well-structured articles on any topic in seconds using advanced AI.",
      Icon: SquarePen,
      bg: { from: "#3588F2", to: "#0BB0D7" },
      path: "/ai/write-article",
    },
    {
      title: "Blog Title Generator",
      description:
        "Create attention-grabbing blog titles that boost clicks, engagement, and visibility.",
      Icon: Hash,
      bg: { from: "#B153EA", to: "#E549A3" },
      path: "/ai/blog-titles",
    },
    {
      title: "AI Image Generator",
      description:
        "Transform your ideas into stunning AI-generated artwork, illustrations, and visuals.",
      Icon: Image,
      bg: { from: "#20C363", to: "#11B97E" },
      path: "/ai/generate-images",
    },
    {
      title: "Background Remover",
      description:
        "Instantly remove image backgrounds with precision and create clean, professional visuals.",
      Icon: Eraser,
      bg: { from: "#F76C1C", to: "#F04A3C" },
      path: "/ai/remove-background",
    },
    {
      title: "Object Remover",
      description:
        "Erase unwanted objects, distractions, or imperfections from images with a single click.",
      Icon: Scissors,
      bg: { from: "#5C6AF1", to: "#427DF5" },
      path: "/ai/remove-object",
    },
    {
      title: "AI Resume Reviewer",
      description:
        "Optimize your resume with AI-powered feedback and increase your chances of getting hired.",
      Icon: FileText,
      bg: { from: "#12B7AC", to: "#08B6CE" },
      path: "/ai/review-resume",
    },
  ];

  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <section className="relative overflow-hidden px-4 sm:px-10 xl:px-16 pt-24 pb-20 ">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2" />

      {/* Header */}
      <div className="relative z-10 text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold">
          Create Without Limits
        </h2>

        <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4">
          Harness the power of AI to generate high-quality content, enhance
          creativity, and accelerate every stage of your workflow.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {tools.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="
              group
              relative
              overflow-hidden
              p-8
              rounded-3xl
              bg-white/[0.04]
              backdrop-blur-2xl
              border
              border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
              hover:bg-white/[0.08]
              hover:border-cyan-400/20
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              cursor-pointer
            "
          >
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

            {/* Icon */}
            <div
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #22DDF4, #06B6D4, #3B82F6)",
                boxShadow:
                  "0 10px 25px rgba(34,221,244,0.25), 0 0 20px rgba(59,130,246,0.15)",
              }}
            >
              <tool.Icon className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h3 className="relative text-white mt-6 mb-3 text-xl font-semibold group-hover:text-cyan-300 transition-colors duration-300">
              {tool.title}
            </h3>

            {/* Description */}
            <p className="relative text-white/60 leading-relaxed text-sm">
              {tool.description}
            </p>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
