// youtube-embed.js
import React from 'react';
import YouTube from 'react-youtube';

interface YouTubeEmbedProps {
  url: string
  title?: string
}

export function YouTubeEmbed({ url, title = 'YouTube video player' }: YouTubeEmbedProps) {
  const videoId = url.match(/^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
  const id = videoId && videoId[7].length === 11 ? videoId[7] : null;

  if (!id) {
    return <div className="text-red-500">Invalid YouTube URL</div>
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0 as 0 | 1,
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <YouTube videoId={id} opts={opts} title={title} />
    </div>
  )
}

// video-section.js

export default function VideoSection() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Introduction Part</h1>
      <YouTubeEmbed 
        url="https://youtu.be/lhBL89UZ5hw" 
        title="the one choice official introduction video "
      />
      <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
        Learn more about Theonechoice and its features. This video provides an overview of how it works.
      </p>
    </div>
  )
}
