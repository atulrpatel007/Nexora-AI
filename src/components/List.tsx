import React, { useState } from "react";

const List = ({ values }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [expandedId, setExpandedId] = useState(null);

  const displayedValues = values.slice(0, visibleCount);

  return (
    <div>
      {/* List */}
      <div className="space-y-4">
        {displayedValues.map((item, idx) => (
          <div
            key={item.id || idx}
            className="
              bg-white/[0.03]
              border border-white/10
              rounded-2xl
              p-5
              hover:bg-white/[0.05]
              transition-all duration-300
            "
          >
            {/* Header */}
            <div
              onClick={() =>
                setExpandedId(
                  expandedId === item.id ? null : item.id
                )
              }
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-4
                cursor-pointer
              "
            >
              <div className="flex-1 min-w-0">
                <h3
                  className="
                    text-white
                    font-medium
                    leading-6
                    line-clamp-2
                  "
                  title={item.title}
                >
                  {item.title}
                </h3>

                <p className="text-white/40 text-sm mt-1">
                  {item.type} •{" "}
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>

              <span
                className="
                  shrink-0
                  px-4
                  py-1.5
                  rounded-full
                  text-xs
                  font-medium

                  bg-secondary/10
                  border border-secondary/20
                  text-secondary

                  self-start sm:self-center
                "
              >
                {item.type}
              </span>
            </div>

            {/* Expanded Content */}
            {expandedId === item.id && (
              <div className="mt-5 pt-5 border-t border-white/10">
                {item.type.toLowerCase() === "image" ? (
                  <img
                    src={item.content}
                    alt={item.title}
                    className="
                      w-full
                      max-w-2xl
                      rounded-xl
                      border border-white/10
                    "
                  />
                ) : (
                  <div
                    className="
                      text-white/80
                      text-sm
                      leading-relaxed
                      whitespace-pre-line
                      max-h-80
                      overflow-y-auto
                      pr-2
                    "
                  >
                    {item.content}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More / Show Less */}
      {values.length > 5 && (
        <div className="flex justify-center gap-3 mt-6">
          {visibleCount < values.length && (
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + 5)
              }
              className="
                px-5
                py-2.5
                rounded-xl

                bg-secondary/10
                border border-secondary/20
                text-secondary
                font-medium

                hover:bg-secondary/20
                hover:scale-105

                transition-all duration-300
              "
            >
              Load More
            </button>
          )}

          {visibleCount > 5 && (
            <button
              onClick={() => {
                setVisibleCount(5);
                setExpandedId(null);
              }}
              className="
                px-5
                py-2.5
                rounded-xl

                bg-white/5
                border border-white/10
                text-white/70
                font-medium

                hover:bg-white/10
                hover:text-white

                transition-all duration-300
              "
            >
              Show Less
            </button>
          )}
        </div>
      )}

      {/* Empty State */}
      {values.length === 0 && (
        <div
          className="
            flex items-center justify-center
            h-56
            rounded-2xl
            border border-white/10
            bg-white/[0.02]
            mt-4
          "
        >
          <p className="text-white/40 text-lg">
            No Creations Found Yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default List;