import React from 'react';
import YouTube from 'react-youtube';

// YouTubeEmbed Component
interface YouTubeEmbedProps {
  url: string;
  title?: string;
}

export function YouTubeEmbed({ url, title = 'YouTube video player' }: YouTubeEmbedProps) {
  const videoId = url.match(/^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
  const id = videoId && videoId[7].length === 11 ? videoId[7] : null;

  if (!id) {
    return <div className="text-red-500">Invalid YouTube URL</div>;
  }

  const opts = {
    playerVars: {
      autoplay: 0 as 0 | 1, // Do not autoplay
      rel: 0,              // Disable suggested videos
    },
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Maintain aspect ratio */}
      <div className="w-full h-0 pb-[56.25%] relative">
        <YouTube videoId={id} opts={opts} title={title} className="absolute top-0 left-0 w-full h-full" />
      </div>
    </div>
  );
}

// VideoSection Component
export default function VideoSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        Introduction Part
      </h1>
      <div className="lg:w-[80%] lg:mx-auto xl:w-[70%]">
        <YouTubeEmbed 
          url="https://youtu.be/lhBL89UZ5hw" 
          title="The One Choice Official Introduction Video"
        />
      </div>
      <p className="mt-6 text-base sm:text-lg text-gray-600 text-center">
        Learn more about The One Choice and its features. This video provides an overview of how it works.
      </p>
    </div>
  );
}
