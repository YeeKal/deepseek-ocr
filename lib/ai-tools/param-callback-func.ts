import { ParamItem } from "@/lib/types";

export function setDefaultParamString(paramDef: ParamItem[]): Record<string, string> {
  return Object.fromEntries(
    paramDef.map(item => [item.id, item.defaultSubItemId])
  );
}

export function ai3dIconParamCallback(
  rawPrompt: string,
  params: string,
  paramDef: ParamItem[]
): string {
  let paramJson: Record<string, unknown>;

  // Parse JSON safely
  try {
    paramJson = JSON.parse(params);
    console.log('Parsed params:', paramJson);
  } catch (error) {
    console.error('Invalid JSON input:', params);
    throw new Error('Invalid Params JSON: Unable to parse.');
  }

  // Validate required keys in paramJson
  for (const pd of paramDef) {
    if (!Object.hasOwn(paramJson, pd.id)) {
      throw new Error(`Missing required parameter: "${pd.id}"`);
    }
  }

  // Extract color palette value safely
  const colorPaletteParamValue = paramJson["color-palette"];
  let colorPalette: string | undefined;

  if (typeof colorPaletteParamValue === 'string') {
    const colorParam = paramDef.find(p => p.id === "color-palette");
    colorPalette = colorParam?.subItems.find(si => si.id === colorPaletteParamValue)?.value;
  }

  // Build the final prompt
  return [
    `3D icon of a ${rawPrompt},`,
    'stylized 3D render,',
    'soft claymation aesthetic,',
    'sculpted plasticine look,',
    'smooth rounded edges,',
    `${colorPalette ?? 'vibrant gradient colors (pinks, purples, teals, oranges)'},`, // fallback if color not found
    'smooth color transitions,',
    'soft studio lighting,',
    'diffused shadows,',
    'subtle ambient occlusion,',
    'isolated on a solid black background,',
    'centered composition,',
    'ultra high detail,',
    'trending on ArtStation'
  ].join(' ');
}