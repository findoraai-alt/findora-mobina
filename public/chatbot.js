(function (window, document) {
  if (window.FindoraChatbot) return;

  // ---------------------------
  // Load Tailwind safely
  // ---------------------------
  function loadTailwind(callback) {
    if (document.getElementById("findora-tailwind")) {
      callback();
      return;
    }

    const script = document.createElement("script");
    script.id = "findora-tailwind";
    script.src = "https://cdn.tailwindcss.com";
    script.onload = callback;
    document.head.appendChild(script);
  }

  // ---------------------------
  // Init function
  // ---------------------------
  function init(userConfig = {}) {
    const config = {
      botName: "Findora Assistant",
      primaryColor: "#4f46e5", // visible default
      position: "right", // "left" | "right"
      welcomeMessage: "Hi! How can I help you today?",
      ...userConfig,
    };

    loadTailwind(() => {
      // Prevent duplicate mounts
      if (document.getElementById("findora-chatbot-root")) return;

      const root = document.createElement("div");
      root.id = "findora-chatbot-root";
      root.style.position = "fixed";
      root.style.inset = "0";
      root.style.pointerEvents = "none";
      root.style.zIndex = "9999";

      root.innerHTML = `
        <!-- Chat Button -->
        <button
          id="findora-chatbot-button"
          class="fixed bottom-5 ${config.position}-5 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white"
          style="background:${config.primaryColor}; pointer-events:auto;"
          aria-label="Open chat"
        >
          AI
        </button>

        <!-- Chat Window -->
        <div
          id="findora-chatbot-window"
          class="fixed bottom-24 ${config.position}-5 w-96 h-[520px] bg-white rounded-xl shadow-2xl hidden flex-col overflow-hidden"
          style="pointer-events:auto;"
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between px-4 py-3 text-white"
            style="background:${config.primaryColor};"
          >
            <span class="font-semibold text-sm">${config.botName}</span>
            <button
              id="findora-chatbot-close"
              class="text-xl leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <!-- Messages -->
          <div
            id="findora-chatbot-messages"
            class="flex-1 p-4 overflow-y-auto bg-slate-50 text-sm text-slate-700"
          >
            <div class="mb-2">${config.welcomeMessage}</div>
          </div>

          <!-- Input -->
          <div class="p-3 border-t flex gap-2">
            <input
              id="findora-chatbot-input"
              class="flex-1 border rounded-full px-4 py-2 text-sm outline-none"
              placeholder="Type a message..."
            />
            <button
              id="findora-chatbot-send"
              class="w-9 h-9 rounded-full text-white flex items-center justify-center"
              style="background:${config.primaryColor};"
            >
              ➤
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(root);

      // ---------------------------
      // Elements
      // ---------------------------
      const btn = document.getElementById("findora-chatbot-button");
      const win = document.getElementById("findora-chatbot-window");
      const close = document.getElementById("findora-chatbot-close");
      const input = document.getElementById("findora-chatbot-input");
      const send = document.getElementById("findora-chatbot-send");
      const messages = document.getElementById("findora-chatbot-messages");

      // ---------------------------
      // UI logic
      // ---------------------------
      function toggle() {
        win.classList.toggle("hidden");
        win.classList.toggle("flex");
        input.focus();
      }

      function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        const userMsg = document.createElement("div");
        userMsg.className = "mb-2 text-right";
        userMsg.innerHTML = `
          <span class="inline-block bg-indigo-500 text-white px-3 py-2 rounded-xl text-sm">
            ${text}
          </span>
        `;
        messages.appendChild(userMsg);
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
      }

      btn.onclick = toggle;
      close.onclick = toggle;
      send.onclick = sendMessage;
      input.onkeydown = (e) => e.key === "Enter" && sendMessage();
    });
  }

  // ---------------------------
  // Expose globally
  // ---------------------------
  window.FindoraChatbot = { init };
})(window, document);
