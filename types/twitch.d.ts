declare namespace Twitch {
  class Embed {
    constructor(
      elementId: string,
      options: {
        width?: number | string;
        height?: number | string;
        channel?: string;
        layout?: "video-with-chat" | "video";
        parent?: string[];
        autoplay?: boolean;
        muted?: boolean;
        theme?: "light" | "dark";
      }
    );

    addEventListener(event: string, callback: () => void): void;
    getPlayer(): unknown;

    static VIDEO_READY: string;
    static VIDEO_PLAY: string;
  }
}
