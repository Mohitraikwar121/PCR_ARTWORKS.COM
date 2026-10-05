# ARTWORK — Mr. Poonam Chand Raikwar

Premium artist gallery website built with Next.js, TypeScript and React.

## Included visual archive

The current build integrates the supplied artist and artwork photography:
- Artist landscape portrait
- Artist portrait
- Artist editorial portrait
- Johnny Johnny mural
- Waterworks mural + process photograph
- Sai Gyan Mandir mural
- Large-scale Hanuman sculpture process

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Content rule

Only supplied facts and visible visual information are used. Unknown artwork dates, prices, exhibition history and availability are not fabricated.

## Image architecture

Images are kept in `public/images` and rendered through Next.js Image for responsive delivery. Featured/priority imagery is loaded prominently while archive imagery remains progressively discoverable.
