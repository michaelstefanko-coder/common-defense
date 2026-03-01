# Common Defense — Symbol Design Prompts for Nano Banana Pro

## How to Use This Document

**Model:** Use Nano Banana Pro (`gemini-3-pro-image-preview`) via Gemini or AI Studio. Nano Banana 2 (`gemini-3.1-flash-image`) also works for faster iteration.

**Prompting principles for Nano Banana Pro:**
- Use natural language, not keyword spam. Describe what you want the way you'd brief a human designer.
- Be specific about constraints: stroke count, color, medium, reproduction method.
- Edit conversationally. If an image is 80% right, don't re-roll — describe the specific fix.
- Specify style explicitly: "hand-drawn," "stencil," "woodcut," "geometric," etc.
- For text in images, quote the exact text and specify font style.

**Workflow:**
1. Run each "Primary Prompt" first.
2. Use the "Refinement Prompts" conversationally in the same thread to iterate.
3. Once you have a strong concept, run the "Asset Variant Prompts" to generate stencil, stamp, and social media versions.
4. Generate a "Reproducibility Test" version to verify a child could draw it.

---

## Design Criteria (Reference for All Prompts)

Every symbol must satisfy:
- **Child-drawable:** 6 strokes or fewer. A 10-year-old with a marker should be able to reproduce it recognizably.
- **Stencil-ready:** Works as a single-layer cutout. No floating interior shapes (islands) unless bridged.
- **Scale-independent:** Legible at 1 inch on a sticker and 10 feet on a wall.
- **Monochrome:** Must work in pure black on any surface. No gradients, no gray.
- **Culturally unambiguous:** Should not closely resemble existing political, religious, or corporate symbols.
- **Conceptually resonant:** Should evoke defense, solidarity, collective strength, or constitutional principle.

---

## CONCEPT 1: THE SHIELD

**Rationale:** The most direct symbol for "defense." A shield is universally understood across cultures. The simplest shield is 4–5 straight lines: flat top, angled sides, point at bottom. It is the heraldic form of protection — the people's shield, not the state's.

### Primary Prompt
```
Design a minimalist protest symbol: a simple shield outline, drawn with thick black lines on a white background. The shield has a flat top edge, two straight angled sides, and comes to a single point at the bottom — like a classic heraldic shield reduced to its absolute simplest geometric form. No fill, no shading, no decoration inside. Just the outline. The lines should look hand-drawn with a thick marker, slightly imperfect, like someone drew it quickly on a wall. Think of the simplicity of the peace sign or the anarchy circle-A. This needs to be drawable by a child in under 5 seconds. Pure black on white. No text.
```

### Refinement Prompts
- `Make the lines thicker and more confident. This should look like it was painted with a 1-inch brush in a single quick motion.`
- `Simplify further. I want the absolute minimum number of strokes needed to read as a shield. Can you reduce it to 4 straight lines?`
- `Make it slightly taller and narrower. More like a kite shield, less like a wide crest.`
- `The lines are too clean and perfect. Rough them up — this should look like street art, not a vector graphic.`

---

## CONCEPT 2: THE PHALANX

**Rationale:** Three vertical lines crossed by one horizontal line. Evokes a formation — people standing together, held by shared structure. The verticals are the local chapters; the horizontal is the shared doctrine. Extremely simple: 4 strokes. Visually distinct from a hashtag (which has 2+2). Evokes a fence, a barricade, a line held.

### Primary Prompt
```
Design a minimalist protest symbol: three bold vertical parallel lines crossed by one bold horizontal line through their center, forming a simple geometric mark. Thick black lines on white background. The three verticals are evenly spaced and the same height. The single horizontal crosses through all three at the midpoint. The lines should be thick, hand-drawn, slightly rough — like they were painted quickly with a wide brush on concrete. This is meant to be a political resistance symbol, like the peace sign or raised fist — simple enough for a child to draw with a marker in 3 seconds. No text, no shading, no fill. Pure black on white.
```

### Refinement Prompts
- `Make the vertical lines slightly taller relative to the horizontal span. The verticals should dominate — these represent people standing.`
- `The horizontal line should be slightly thicker than the verticals — it's the binding force.`
- `Try a version where the three verticals extend above and below the horizontal line unevenly — the outer two slightly shorter than the center one, like people of different heights standing in formation.`
- `Now try a version where the horizontal line is lower, at about the one-third mark from the bottom, like a foundation or ground line the figures stand on.`

---

## CONCEPT 3: THE KEYSTONE

**Rationale:** The keystone is the central stone in an arch. Remove it and the structure collapses. The people are the keystone of democracy. Visually, a keystone is a trapezoid — wider at top, narrower at bottom (or inverted). Four straight lines. Instantly recognizable as architectural, structural, load-bearing. It says: "We are the thing holding this together. Remove us and it falls."

### Primary Prompt
```
Design a minimalist protest symbol: a single keystone shape — the trapezoidal stone at the top of an arch. The keystone is wider at the top and narrower at the bottom, drawn as a simple outline with thick black lines on white background. No fill, no shading. Just four bold straight lines forming the trapezoid. The lines should look hand-drawn, like thick marker on paper — confident and slightly imperfect. This is a political symbol meant to represent that the people are the keystone of democracy. It needs to be as simple and recognizable as the peace sign. A child should be able to draw it in 4 strokes. Pure black on white. No text, no decoration.
```

### Refinement Prompts
- `Make it more obviously a keystone and less like just any trapezoid. The top should be noticeably wider than the bottom, with a slight wedge shape.`
- `Try inverting it — wider at bottom, narrower at top — like a keystone viewed from below, or a foundation stone.`
- `Try adding a single thin horizontal line across the center of the keystone, suggesting it holds weight above and below.`
- `The proportions are off. Make it taller and narrower. It should feel monumental, not squat.`

---

## CONCEPT 4: THE STANDING LINE

**Rationale:** A circle with a single vertical line through it. The circle is the people (unity, wholeness, the commons). The vertical line is the individual standing within and through the collective — resolve, refusal to kneel, the spine of the movement. Two strokes. Absolute minimum complexity. Evokes both a shield (the circle) and a person (the line). Does not closely resemble any major existing symbol.

### Primary Prompt
```
Design a minimalist protest symbol: a bold circle with a single bold vertical line running through its center, from slightly above the top of the circle to slightly below the bottom. Thick black lines on white background. The circle and line should be the same line weight — heavy, confident, hand-drawn with a thick brush or marker. Slightly rough edges, not digitally perfect. This is a political resistance symbol representing collective unity (the circle) and individual resolve (the line through it). It must be drawable in 2 strokes by a child. Think of the simplicity of the peace sign — this is even simpler. No text, no fill, no shading. Pure black on white.
```

### Refinement Prompts
- `The vertical line should extend just barely past the circle on top and bottom — maybe 15% of the circle's diameter. Not too far, just enough to be visible.`
- `Make the circle slightly thicker than the vertical line. The collective is the dominant visual element.`
- `Try a version where the vertical line does NOT extend beyond the circle — contained entirely within it. Which reads stronger?`
- `Try a version where the line extends only below the circle, like a person standing on the ground — the circle as head/body, the line as standing firm.`

---

## CONCEPT 5: THE NESTED CHEVRONS

**Rationale:** Two or three V-shapes (chevrons) nested inside each other, pointing upward. Represents layered protection, collective shelter, strength in depth. Echoes military rank insignia (populist — the rank-and-file, not the generals). Evokes a roof, a shield, an arrowhead. Very simple: 4–6 strokes. Immediately suggests "defense in depth" and upward direction.

### Primary Prompt
```
Design a minimalist protest symbol: two bold V-shaped chevrons nested inside each other, both pointing upward. The outer chevron is larger, the inner one sits centered inside it. Thick black lines on white background, hand-drawn with a thick marker or brush. Slightly rough, not digitally perfect. The angle of the V should be about 90 degrees — wide enough to feel protective, like a roof or shield, not so narrow it looks like an arrow. This is a political resistance symbol representing collective defense — layered protection, the people sheltering each other. It must be drawable by a child in 4 strokes (two V shapes). No text, no fill, no shading. Pure black on white.
```

### Refinement Prompts
- `Try three nested chevrons instead of two. Does it still read clearly at small sizes?`
- `Make the outer chevron noticeably thicker than the inner one — the collective outer defense is stronger.`
- `Try pointing the chevrons downward instead of up. Does it read more like a shield or more like a military rank insignia?`
- `Flatten the angle slightly — make the V wider, closer to 120 degrees. It should feel broad and protective, not sharp and aggressive.`

---

## CONCEPT 6: THE BROKEN CHAIN LINK

**Rationale:** A single chain link, broken open on one side. Represents liberation from capture — the capture of democracy by money, the capture of government by authoritarianism. A broken chain is one of the oldest symbols of freedom (used in abolitionism, labor movements, anti-colonialism). A single link is drawable: an oval with a gap. Three strokes or fewer.

### Primary Prompt
```
Design a minimalist protest symbol: a single chain link, drawn as a bold oval or rounded rectangle outline, with a visible break or gap on the right side. Thick black lines on white background, hand-drawn with a marker. The break in the link should be clean and deliberate — about 20% of the oval's circumference missing. This is a political symbol representing the breaking of the chains of oligarchy and authoritarianism — the capture of democracy being broken by the people. It must be drawable in essentially one or two strokes by a child — an oval with a gap. Think of how universally the broken chain is understood as a symbol of liberation. No text, no fill, no shading. Pure black on white.
```

### Refinement Prompts
- `Make the gap wider and more dramatic. The break should be the focal point.`
- `Try making the link more rectangular/angular rather than oval — closer to a D-shape with a break. Easier to draw with straight lines.`
- `Try a version with two broken links, still interlocked but both broken open. Does it read clearly at small sizes?`
- `The lines need to be thicker. This should be visible from 50 feet away on a wall.`

---

## ASSET VARIANT PROMPTS

Once you've selected the strongest symbol concept, run these in the same conversational thread:

### Stencil Version
```
Now create a version of this symbol optimized for stencil cutting. Pure black silhouette on white. No thin lines — everything should be at least 1/4 inch wide at print size. Ensure there are no "floating islands" — every black area must connect to the border or to another black area via a bridge. This needs to be cuttable from a single sheet of cardboard with a box cutter.
```

### Rubber Stamp Version
```
Now create a version optimized for a rubber stamp. Solid black mark on white, as if stamped onto paper with ink. Slightly uneven ink coverage — heavier in the center, lighter at edges, like a real stamp impression. The symbol should be contained within a roughly square boundary, suitable for a 2-inch stamp.
```

### Spray Paint / Stencil on Wall
```
Now show this symbol spray-painted through a stencil onto a concrete wall. Black spray paint on gray concrete. Slight overspray at edges. Realistic lighting — outdoor, overcast. The wall should look like a real urban surface with some texture and wear. The symbol should be about 2 feet across.
```

### Social Media Profile Picture
```
Now create a version suitable for a social media profile picture. The symbol centered on a plain white background, bold black lines. Square format. The symbol should fill about 70% of the frame. Clean but still with that hand-drawn character. This needs to be instantly recognizable at the size of a tiny avatar.
```

### T-Shirt / Merchandise
```
Now show this symbol as it would appear screen-printed on a plain black t-shirt. White ink on black cotton. The symbol should be centered on the chest area, about 8 inches wide. Show the t-shirt laid flat, photographed from directly above. The print should look slightly worn and textured, like it's been washed a few times.
```

### Sticker Sheet
```
Create a sheet of circular stickers featuring this symbol. Each sticker is about 2 inches in diameter with the symbol in black centered on a white circle. Show 12 stickers arranged in a 3x4 grid on a peel-off backing sheet, as if they just came from a print shop. The stickers should have a thin black border around each circle.
```

### Hand-Drawn Reproducibility Test
```
Show a child's hand drawing this symbol with a black Sharpie marker on white notebook paper. The child is about 10 years old. The drawing should look like what a real child would produce — slightly wobbly, imperfect proportions, but clearly recognizable as the same symbol. This tests whether the symbol passes the "can a kid draw it" requirement.
```

---

## COMBINATION MARK PROMPTS (Symbol + Text)

For materials that need the name alongside the symbol:

### Horizontal Lockup
```
Create a horizontal logo lockup: the [SYMBOL NAME] symbol on the left, with the text "COMMON DEFENSE" to the right in a bold, condensed sans-serif font (like Impact or similar). All black on white. The symbol and text should be vertically centered with each other. The text should be about the same height as the symbol. Hand-drawn aesthetic for the symbol, clean type for the text. No tagline, no additional elements.
```

### Stacked Lockup
```
Create a stacked logo: the [SYMBOL NAME] symbol centered above the text "COMMON DEFENSE" in bold, condensed, uppercase sans-serif letters. All black on white. The text should be about 60% as wide as the symbol. Tight spacing between symbol and text. This is for square-format use — social media posts, protest signs, sticker centers.
```

### With Tagline
```
Create a stacked logo: the [SYMBOL NAME] symbol centered above "COMMON DEFENSE" in bold sans-serif, with a thin horizontal rule below, and beneath that the tagline "Provide for the common defence." in smaller italic serif text (like Georgia). All black on white. The overall composition should feel monumental and serious — like the masthead of a constitutional document, not a tech startup.
```

---

## ITERATION STRATEGY

**Round 1 — Concept Generation:** Run each of the 6 Primary Prompts. Don't refine yet. Just generate the raw concept for each. Compare them side by side.

**Round 2 — Narrow to 2-3:** Pick the 2-3 strongest concepts. Run their Refinement Prompts to explore variations.

**Round 3 — Select One:** Choose the single strongest symbol. It should be the one that:
- You could describe to someone verbally and they could draw it
- Looks good at every size
- Doesn't remind you of something else
- Feels inevitable, not designed

**Round 4 — Asset Generation:** Run all Asset Variant Prompts for the selected symbol.

**Round 5 — Stress Test:** Show it to 5 people and ask them to draw it from memory after seeing it for 3 seconds. If 4 out of 5 can do it, the symbol works.

---

## NOTES ON NANO BANANA PRO BEHAVIOR

- **Nano Banana Pro uses "Thinking"** — it reasons about complex prompts before generating. Longer, more detailed prompts produce better results than short ones.
- **Edit in the thread.** Don't start new conversations for refinements. The model maintains visual context and iterates much better conversationally.
- **If it adds unwanted detail,** say: `Remove all decoration. Simpler. Fewer lines. This should be drawable in [X] strokes.`
- **If it goes too digital/clean,** say: `Make it look hand-drawn. Thick marker on paper. Imperfect. Human.`
- **If it ignores "no text,"** say: `Remove all text from the image. Symbol only. No words, no letters, no characters.`
- **For color versions later,** the most effective protest color schemes are: black on white (maximum contrast), red on white (urgency, blood), white on black (reversal, night visibility), red and black (anarchist/labor tradition).

---

## SOURCES AND REFERENCES

- [Google Blog: Prompting Tips for Nano Banana Pro](https://blog.google/products/gemini/prompting-tips-nano-banana-pro/)
- [DEV Community: Nano Banana Pro Prompting Guide](https://dev.to/googleai/nano-banana-pro-prompting-guide-strategies-1h9n)
- [Atlabs AI: Ultimate Nano Banana Pro Prompting Guide](https://www.atlabs.ai/blog/the-ultimate-nano-banana-pro-prompting-guide-mastering-gemini-3-pro-image)
- [Google Blog: Nano Banana Pro Launch](https://blog.google/technology/ai/nano-banana-pro/)
- [Google Blog: Nano Banana 2 Launch](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/)
- [TechCrunch: Nano Banana 2](https://techcrunch.com/2026/02/26/google-launches-nano-banana-2-model-with-faster-image-generation/)
- [Elephant Art: Meanings Behind Protest Symbols](https://elephant.art/the-real-meanings-behind-six-symbols-of-protest-01072020/)
- [People's History Museum: The Raised Fist](https://phm.org.uk/blogposts/the-raised-fist-a-history-of-the-symbol/)
