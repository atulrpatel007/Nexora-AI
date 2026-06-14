import React, { useEffect, useState } from "react";
import { Sparkles, Gem, GalleryHorizontalEnd, GalleryVerticalEnd, IndianRupee, HandCoins} from "lucide-react";
import { useAuth } from "@clerk/react";
import List from "../components/List";

const DashBoard = () => {
  const [creations, setCreations] = useState([
      {
    id: 1,
    title: "Navigating the Technological Frontier: Trends Shaping Our Future",
    type: "article",
    createdAt: "2026-06-14T10:30:00Z",
    content: `
Artificial Intelligence is transforming industries worldwide.
From healthcare and finance to education and entertainment,
AI is enabling smarter decision-making, automation, and innovation.

In the coming years, we can expect AI to become more personalized,
efficient, and integrated into our daily lives.
    `,
  },

  {
    id: 2,
    title: "Cyberpunk City Generated with AI",
    type: "image",
    createdAt: "2026-06-13T15:45:00Z",
    content:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1000",
  },

  {
    id: 3,
    title: "10 Productivity Hacks Every Developer Should Know",
    type: "article",
    createdAt: "2026-06-12T09:20:00Z",
    content: `
1. Use keyboard shortcuts.
2. Automate repetitive tasks.
3. Learn debugging tools.
4. Focus on deep work sessions.
5. Keep documentation updated.
    `,
  },

  {
    id: 4,
    title: "Background Removed From Product Image",
    type: "image",
    createdAt: "2026-06-11T18:10:00Z",
    content:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
  },

  {
    id: 5,
    title: "Modern Resume For Software Engineer",
    type: "resume",
    createdAt: "2026-06-10T12:00:00Z",
    content: `
John Doe
Frontend Developer

Skills:
• React.js
• Tailwind CSS
• Node.js
• MongoDB

Experience:
Frontend Developer at Nexora AI
2024 - Present
    `,
  },

  {
    id: 6,
    title: "AI Landscape Artwork",
    type: "image",
    createdAt: "2026-06-09T08:15:00Z",
    content:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000",
  },
   {
    id: 1,
    title: "Navigating the Technological Frontier: Trends Shaping Our Future",
    type: "article",
    createdAt: "2026-06-14T10:30:00Z",
    content: `
Artificial Intelligence is transforming industries worldwide.
From healthcare and finance to education and entertainment,
AI is enabling smarter decision-making, automation, and innovation.

In the coming years, we can expect AI to become more personalized,
efficient, and integrated into our daily lives.
    `,
  },

  {
    id: 2,
    title: "Cyberpunk City Generated with AI",
    type: "image",
    createdAt: "2026-06-13T15:45:00Z",
    content:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1000",
  },

  {
    id: 3,
    title: "10 Productivity Hacks Every Developer Should Know",
    type: "article",
    createdAt: "2026-06-12T09:20:00Z",
    content: `
1. Use keyboard shortcuts.
2. Automate repetitive tasks.
3. Learn debugging tools.
4. Focus on deep work sessions.
5. Keep documentation updated.
    `,
  },

  {
    id: 4,
    title: "Background Removed From Product Image",
    type: "image",
    createdAt: "2026-06-11T18:10:00Z",
    content:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
  },

  {
    id: 5,
    title: "Modern Resume For Software Engineer",
    type: "resume",
    createdAt: "2026-06-10T12:00:00Z",
    content: `
John Doe
Frontend Developer

Skills:
• React.js
• Tailwind CSS
• Node.js
• MongoDB

Experience:
Frontend Developer at Nexora AI
2024 - Present
    `,
  },

  {
    id: 6,
    title: "AI Landscape Artwork",
    type: "image",
    createdAt: "2026-06-09T08:15:00Z",
    content:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000",
  },
  ]);
  const getDashboardData = async () => {};
  useEffect(() => {
    getDashboardData();
  }, []);
  const { has } = useAuth();

  return (
    <div >
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-white/50 text-sm">Total Creations</p>
              <h2 className="text-3xl font-bold text-white mt-1">
                {creations.length}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl  flex items-center justify-center" style={{
                background:
                  "linear-gradient(135deg, #22DDF4, #06B6D4, #3B82F6)",
                boxShadow:
                  "0 10px 25px rgba(34,221,244,0.25), 0 0 20px rgba(59,130,246,0.15)",
              }}>
              <GalleryVerticalEnd className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-white/50 text-sm">Plan Status</p>
              <h2 className="text-2xl font-semibold text-white mt-1">
                {has({ plan: "pro_user" }) ? "Pro Plan" : "Free Plan"}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{
                background:
                  "linear-gradient(135deg, #22DDF4, #06B6D4, #3B82F6)",
                boxShadow:
                  "0 10px 25px rgba(34,221,244,0.25), 0 0 20px rgba(59,130,246,0.15)",
              }}>
              <HandCoins className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-5">
          Recent Creations
        </h2>
        <List values={creations} />
      </div>
    </div>
  );
};

export default DashBoard;
