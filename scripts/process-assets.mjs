import { copyFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceRoot = path.join(root, "assets", "source-approved");
const publicImagesRoot = path.join(root, "public", "images");

const formats = [
  {
    extension: "webp",
    options: { quality: 82, effort: 6 },
  },
  {
    extension: "avif",
    options: { quality: 52, effort: 6 },
  },
];

const responsiveImages = [
  {
    source: "Hero.png",
    outputDir: path.join(publicImagesRoot, "hero"),
    outputName: "hero-industrial-intelligence-v1",
    requestedWidths: [768, 1280, 1920],
  },
  {
    source: "1.png",
    outputDir: path.join(publicImagesRoot, "capabilities"),
    outputName: "capability-ai-enterprise-v1",
    requestedWidths: [480, 768, 1200],
  },
  {
    source: "2.png",
    outputDir: path.join(publicImagesRoot, "capabilities"),
    outputName: "capability-automation-special-machinery-v1",
    requestedWidths: [480, 768, 1200],
  },
  {
    source: "3.png",
    outputDir: path.join(publicImagesRoot, "capabilities"),
    outputName: "capability-precision-cnc-v1",
    requestedWidths: [480, 768, 1200],
  },
  {
    source: "4.png",
    outputDir: path.join(publicImagesRoot, "capabilities"),
    outputName: "capability-automotive-support-v1",
    requestedWidths: [480, 768, 1200],
  },
  {
    source: "5.png",
    outputDir: path.join(publicImagesRoot, "capabilities"),
    outputName: "capability-technical-chemicals-v1",
    requestedWidths: [480, 768, 1200],
  },
];

const logo = {
  source: "logo.jpg",
  outputDir: path.join(publicImagesRoot, "brand"),
  outputName: "logo-ktech.jpg",
};

const expectedSources = [
  ...responsiveImages.map((image) => image.source),
  logo.source,
];

async function assertSourceExists(fileName) {
  const sourcePath = path.join(sourceRoot, fileName);

  try {
    await stat(sourcePath);
  } catch {
    throw new Error(`Missing approved source asset: ${sourcePath}`);
  }
}

function outputPathFor(image, width, extension) {
  return path.join(image.outputDir, `${image.outputName}-${width}.${extension}`);
}

async function processResponsiveImage(image) {
  const sourcePath = path.join(sourceRoot, image.source);
  const metadata = await sharp(sourcePath).rotate().metadata();

  if (!metadata.width) {
    throw new Error(`Unable to read image width: ${sourcePath}`);
  }

  const widths = image.requestedWidths.filter((width) => width <= metadata.width);
  await mkdir(image.outputDir, { recursive: true });

  const outputs = [];

  for (const width of widths) {
    for (const format of formats) {
      const outputPath = outputPathFor(image, width, format.extension);

      await sharp(sourcePath)
        .rotate()
        .resize({
          width,
          fit: "inside",
          withoutEnlargement: true,
        })
        [format.extension](format.options)
        .toFile(outputPath);

      outputs.push(path.relative(root, outputPath));
    }
  }

  return {
    source: image.source,
    sourceWidth: metadata.width,
    widths,
    outputs,
  };
}

async function processLogo() {
  const sourcePath = path.join(sourceRoot, logo.source);
  const outputPath = path.join(logo.outputDir, logo.outputName);

  await sharp(sourcePath).rotate().metadata();
  await mkdir(logo.outputDir, { recursive: true });
  await copyFile(sourcePath, outputPath);

  return path.relative(root, outputPath);
}

for (const source of expectedSources) {
  await assertSourceExists(source);
}

const processed = [];

for (const image of responsiveImages) {
  processed.push(await processResponsiveImage(image));
}

const logoOutput = await processLogo();
const variantCount = processed.reduce(
  (count, image) => count + image.outputs.length,
  0,
);

console.log("Asset processing complete");
console.log(`Verified sources: ${expectedSources.length}`);
console.log(`Generated responsive variants: ${variantCount}`);

for (const image of processed) {
  console.log(`${image.source}: ${image.widths.join(", ")}px`);
}

console.log(`Copied logo: ${logoOutput}`);
