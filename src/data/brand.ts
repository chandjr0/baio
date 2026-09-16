export const brand = {
  name: "BaioHack",
  tagline: "The calm layer beneath the noise.",
  promise: "Wellness, intelligently personalised.",
  philosophy: ["LEARN.", "ADAPT.", "EVOLVE."],
  description:
    "A calm health companion that adapts as your body and life change — across wearables, labs, meds, hormones, seasons, stress, sleep, meals, light, and movement.",
  socials: [
    { label: "Email", handle: "charlotte@baiohack.com", href: "mailto:charlotte@baiohack.com" },
    {
      label: "LinkedIn",
      handle: "BaioHack",
      href: "https://www.linkedin.com/company/baiohack/",
    },
    { label: "Instagram", handle: "@baiohack_", href: "https://www.instagram.com/baiohack_/" },
    { label: "TikTok", handle: "@baiohack_", href: "https://www.tiktok.com/@baiohack_" },
    { label: "X", handle: "@bAIohack", href: "https://x.com/bAIohack" },
  ],
} as const;

export const rhythms = [
  { name: "Sleep", detail: "Recovery begins before you close your eyes.", phase: "REST" },
  { name: "Meals", detail: "Timing and consistency, shaped around real life.", phase: "FUEL" },
  { name: "Light", detail: "A quiet cue for energy, focus, and rest.", phase: "ALIGN" },
  { name: "Movement", detail: "Enough to support you. Never to punish you.", phase: "MOVE" },
  { name: "Meds / Supps", detail: "Steady support that fits the whole picture.", phase: "SUPPORT" },
  { name: "Stress", detail: "Context matters as much as the number.", phase: "RESPOND" },
  { name: "Travel", detail: "Your rhythm can bend without breaking.", phase: "SHIFT" },
  { name: "Hormones", detail: "Guidance that expects your body to change.", phase: "EVOLVE" },
] as const;
