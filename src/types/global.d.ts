export {};

declare global {
  interface Window {
    FindoraChatbot: {
      init: (config?: {
        botName?: string;
        primaryColor?: string;
        position?: "left" | "right";
        welcomeMessage?: string;
      }) => void;
    };
  }
}
