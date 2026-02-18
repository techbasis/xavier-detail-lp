"use client";

import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    if (video.muted) {
      video.muted = false;
      video.currentTime = 0;
      video.play();
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  }

  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/3 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Header */}
        <p className="mb-4 text-xs tracking-widest text-muted-foreground">
          NOSSO TRABALHO
        </p>
        <h2 className="mb-4 text-center font-serif text-4xl font-bold text-foreground md:text-6xl">
          APLICACAO
        </h2>
        <p className="mb-12 max-w-lg text-center text-sm text-muted-foreground">
          Veja de perto o cuidado e a precisao que dedicamos a cada detalhe do
          seu veiculo
        </p>

        {/* Phone Mockup */}
        <div className="phone-glow relative mx-auto w-[280px] rounded-[2.5rem] border-2 border-foreground/15 bg-background/80 p-2 sm:w-[320px] md:w-[340px]">
          {/* Notch */}
          <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-background" />

          {/* Video */}
          <div
            className="relative overflow-hidden rounded-[2rem]"
            style={{ aspectRatio: "9/16" }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/due6xbj4h/video/upload/v1769737959/AQPKTdsF9stETJtKdkC9BvjmrvTz5St6AzxiZjgjkTqnbp-qjyS8xCX_fWyXw0U9snkGZMsSo9Z5He8JH6GnSsjMdcAJf6DD68CSp9M_ahjpb9.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-3 left-1/2 z-20 h-1 w-32 -translate-x-1/2 rounded-full bg-foreground/30" />
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-foreground backdrop-blur-sm transition-all hover:bg-foreground/10"
            aria-label={isPlaying ? "Pausar video" : "Reproduzir video"}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="ml-0.5 h-5 w-5" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-foreground backdrop-blur-sm transition-all hover:bg-foreground/10"
            aria-label={isMuted ? "Ativar som" : "Mutar video"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
