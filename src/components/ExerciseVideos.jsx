/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  if (!exerciseVideos.length) return "Loading...";

  return (
    <div className="lg:mt-48 mt-5 p-5 w-full">
      <h1 className="text-2xl mb-8">
        Watch <span className="text-custom-red2, capitalize">{name}</span>{" "}
        exercise videos
      </h1>

      <div className="flex justify-start items-center flex-wrap flex-col lg:flex-row lg:gap-10">
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className=" flex flex-col gap-6 w-[380px] h-[381px] no-underline"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <h2 className="font-semibold text-lg">{item.video.title}</h2>
            <h3 className="font-medium text-base -mt-4">{item.video.channelName}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
