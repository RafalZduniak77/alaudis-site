export const ALAUDIS_MODEL_IDS = ["178", "214", "275"] as const;

export type AlaudisModelId = (typeof ALAUDIS_MODEL_IDS)[number];

export const ALAUDIS_MODELS = {
  "178": { voice: "ONE", number: "01" },
  "214": { voice: "LEO", number: "02" },
  "275": { voice: "DREAM", number: "03" },
} as const;

export function getAlaudisModelName(model: AlaudisModelId) {
  return `ALAUDIS ${ALAUDIS_MODELS[model].voice} ${model}`;
}
