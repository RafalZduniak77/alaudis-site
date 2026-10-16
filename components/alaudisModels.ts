export const ALAUDIS_MODEL_IDS = ["178", "214", "275"] as const;

export type AlaudisModelId = (typeof ALAUDIS_MODEL_IDS)[number];

export const ALAUDIS_MODELS = {
  "178": { voice: "ONE" },
  "214": { voice: "LEO" },
  "275": { voice: "DREAM" },
} as const;

export function getAlaudisModelName(model: AlaudisModelId) {
  return `ALAUDIS ${ALAUDIS_MODELS[model].voice} ${model}`;
}
