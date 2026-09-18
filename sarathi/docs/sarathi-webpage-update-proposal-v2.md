# sarathi.veynqor.com for SARATHI 2: the visual proposal

Prepared 12 September 2026. Replaces the first proposal. The copy from that document still stands and is collected in the appendix. What changed: this version is built around what the page looks like and how it moves, and it comes with a clickable prototype, `sarathi-2-prototype.html`, so you can see every motion piece instead of reading about it.

Open the prototype and try, in order: watch the verse arrive, scroll to At the pandal and press Lift the conch, tick "The river runs low" and lift it again, tap the rice tray a few times, tap the six objects on the table (the printer prints a slip), play Catch Mahishasura, and scroll to the end. Everything in it is stand-in art drawn in code. The image slots are labelled with what replaces them.

---

## 1. The idea: the page is one night

The live page is a text page with one decorative wheel. The redesign gives it a shape: the page is a single night, and scrolling is time.

- **Dusk on the playa.** The hero and chapter one sit on deep indigo. The verse arrives word by word, the Konark wheel turns slowly at the edge.
- **Afternoon at the pandal.** Chapter two opens on pandal cloth. A pleated red and white band with a scalloped edge runs full width, the same cloth as the real canopy. The story of Durga and Mahishasura is told here, next to the pandal render.
- **Evening, the call.** Back to indigo. The ring of sixty lamps sits beside the text and stays with you as you scroll. Lift the conch and the whole page does what the installation does.
- **Night, the lamps and the game.** The tray of 108 lamps, the six objects on the table, Catch Mahishasura.
- **Midnight, visarjan.** The page darkens to the deepest blue, the ring's reflection lies on water, and the Bengali farewell closes it.

One memorable element carries the page: the ring and the call across the river. Everything else is kept quiet so that moment lands.

### Palette

| Token | Hex | Where it comes from |
|---|---|---|
| Night | #13233B | The existing page's indigo, the sky over the pandal |
| Deep | #0B1526 | Midnight, the water at visarjan |
| Cloth | #F5EFE3 | Pandal cloth, the white of the pleats |
| Turmeric | #EDB144 | Lamps, the ring, marigold, brass |
| Sindoor | #B3261E | Vermilion, the red pleats, the stamp on the slip |
| Silt | #9AA7BA | Captions and small text on indigo |

No gradients as decoration. The only gradients are the sky deepening between sections and the glow of the lamps.

### Type

One family that was designed for Devanagari and Latin together: **Martel** for everything set in words, **Martel Sans** for labels, captions, and buttons. The Devanagari and the English were drawn by the same hand, so the verse and its gloss look like they belong to one page instead of two fonts sharing a line. Self-host the two woff2 files, subset to Latin and Devanagari, about 120 KB total, `font-display: swap`. The single Bengali line at the end can fall back to the visitor's system Bengali font. The prototype falls back to system serifs if the fonts cannot load, and still holds together.

Scale: body 18 px on a 62 character measure, headings 42 px, the Devanagari verse 50 px in the hero and 38 px in the verses section, SARATHI itself at 96 px in turmeric. Prose is left aligned. The two verses are centered, because they are the ritual moments.

### Layout

```
 sindoor strip: SARATHI 2 at Decompression, Oct 17          Scanned a slip? Verses
 ─────────────────────────────────────────────────────────────────────────────
 indigo   आत्मानं रथिनं विद्धि ...  (word by word)             (wheel, turning,
          gloss, citation                                       bleeding off edge)
          SARATHI
          subtitle
 ─────────────────────────────────────────────────────────────────────────────
 indigo   [ photo A, full width: the rig on the playa at dusk, indigo duotone ]
          Chapter one. Black Rock City   (62ch prose)
          [ photo B ] [ photo C ] [ photo D ]   triptych in cloth mats
 ─────────────────────────────────────────────────────────────────────────────
 cloth    ▓▒▓▒▓▒ pleated red and white band, scalloped ▓▒▓▒▓▒
          Chapter two. Calling Durga     (62ch prose)
          [ render E, full width: the pandal, no people, 2 pm light ]
 ─────────────────────────────────────────────────────────────────────────────
 indigo   At the pandal                       ┌───────────────┐
          Ask / Call Durga [Lift the conch]   │  the ring     │  sticky
          ~~~~ the river ~~~~ (dot crosses)   │  breathing    │  on desktop
          Light a lamp / Play / Give / Take   │  "her line"   │
 ─────────────────────────────────────────────────────────────────────────────
 indigo   108 lamps: the rice tray, tap to light
 cloth    On the table: conch, bow, bell, lamp, ring, printer, on a brass edge
 indigo   Catch Mahishasura: the game ring
 indigo   The verses, centered, glowing
 deep     Visarjan: reflection on water, ripples, আসছে বছর আবার হবে
 black    disclaimer, credits, dates
```

On phones the ring drops inline at the Call Durga step, the triptych stacks, the tray becomes 9 columns, and the wheel retreats further off the edge.

---

## 2. Imagery

Ten slots. Photographs where the thing exists, renders where it does not yet, one public domain print for the goddess. Every slot has a stand-in drawn in the prototype so the layout can be judged now.

| Slot | Image | Source | Treatment | Format and size |
|---|---|---|---|---|
| A | The rig on the playa at dusk, chest plate and mic array visible | Your photo | Indigo duotone so the verse reads over it, dust left in | AVIF/WebP, 1600 px wide, under 130 KB. This is the only image above the fold. |
| B | The steel chest plate and four microphones, close | Your photo, brass light | Natural color, warm | 800 px, lazy |
| C | The pack open, computer and battery, hands in frame | Your photo | Natural | 800 px, lazy |
| D | The verse shirt with dust on it, evening | Your photo | Natural | 800 px, lazy |
| E | The pandal, wide, no people, afternoon light | Nano Banana, from the questionnaire image | As rendered, the live SVG ring layered over its glow so it breathes on the page | 1600 px, lazy |
| F | The table, close: conch on cradle, bow, bell, rice tray | Nano Banana now, your photo once built | Warm | 1200 px, lazy |
| G | The ring blazing at night, backdrop red | Nano Banana now, your photo on the night | As rendered | 1200 px, lazy |
| H | The Durga image on the backdrop | Public domain print (a Raja Ravi Varma Mahishasura Mardini, for example), not a generated goddess | In a small gold frame with a marigold edge | 600 px, lazy |
| I | Visarjan mood: a conch at rest in dark water, gold reflections | Nano Banana, or your photo after the night | Deep blue | 1200 px, lazy |
| J | og:image, 1200 x 630 | Crop of E | None | JPEG under 200 KB |

After 17 October, three more: the offering board with its cards, the tray with every lit lamp, and one wide shot of the pandal with the crowd, faces turned away or blurred.

### Rights and restraint

- Your own photographs and renders, public domain art, and Wikimedia Commons photos with the photographer credited. Nothing else.
- No Burning Man logo, no image of the Man, no event branding in any frame. The playa photos show the rig and the dust, not the Man.
- No product photos of anyone's smart glasses. The satire is in the words.
- The goddess is a print, not a generation. A generated Durga is the one image on this page that could read as careless.

### Nano Banana prompts

Use the questionnaire image as the reference for E, F, and G so the three renders agree on the same canopy, cloth, and table. Keep one seed and one style line across all of them.

**Style line (append to every prompt):** documentary photograph, 35 mm, natural light, shallow depth of field, muted indigo shadows and warm gold highlights, no text, no logos, no people.

**E, the pandal wide.** A small pop-up canopy dressed as a Durga Puja pandal inside a large industrial art warehouse, afternoon light from high windows. Pleated red and white cloth valance with a scalloped edge, marigold garlands wound around the posts, a red cloth backdrop with a small framed print and a decorative brass trishul. A long table with a white cloth holds a white conch shell on a wooden cradle, a plain wooden bow, a brass temple bell, and a wooden tray of rice with many small lamps. Behind the table a ring of sixty small warm gold lights glows softly against the red.

**F, the table close.** Close view along a white tablecloth: a white conch shell resting on a small wooden cradle in the foreground, a brass temple bell, a plain wooden bow, and a wooden tray filled with rice and small lit lamps receding behind, red cloth out of focus in the background, a warm gold glow from above.

**G, the ring at night.** Night inside the same pandal, the warehouse dark. A ring of sixty gold lights blazing against red cloth, a red and white pleated valance above catching the light, marigolds on the posts, the table below with a conch and a tray of lit lamps, everything else falling into deep blue shadow.

**I, visarjan.** A white conch shell resting on its side in shallow dark water at night, small ripples spreading from it, a few warm gold reflections on the surface, deep blue everywhere else.

**J, og:image.** Render E again at 1200 x 630, the ring centered, nothing else changed.

---

## 3. Motion

The rule: one signature motion, a handful of things that answer a tap, and almost nothing that moves on its own.

### The signature motion: the ring and the call

The ring of sixty lamps mirrors the physical ring exactly and has four states.

| State | What it does | When |
|---|---|---|
| Idle | Breathes gold, a slow rise and fall over about seven seconds | Whenever nothing is happening |
| Calling | A bright head with a trailing tail runs the ring, about one and a half turns a second | While the question is crossing |
| Answering | Every lamp bright with a faint shimmer | While she speaks |
| Off | Embers | Visarjan |

Pressing **Lift the conch** runs the whole sequence: the conch sounds, the ring goes to Calling, a gold point travels the river from the chest to the far bank, a paler point returns, the ring goes to Answering, and her line fades in: "You called across the river, and I have come." The button now reads **Put the conch down**, and pressing it returns the ring to Idle.

Tick **The river runs low** and lift the conch again. The point gets halfway across and dies. The ring returns to Idle and the line reads: "The river ran low. SARATHI answered on its own, the way it did in the desert." This is the satire, demonstrated in six seconds, without a paragraph.

On desktop the ring is sticky beside the At the pandal text, so it is always in view while you read what it does. On phones it sits inline at the Call Durga step.

### Motion that answers a tap

- **The tray.** Tap it and the next lamp lights: the flame grows out of the tealight with a small overshoot and settles into its own flicker. The counter reads "n of 108 lit." The page keeps no count between visits, and says so. The first lamp lights by itself when the tray scrolls into view, as an invitation.
- **The table.** Six objects on a brass-edged table. Conch scrolls up and lifts the real conch. Bow twangs, with the sound. Bell swings and rings. Lamp lights one lamp. Ring blazes for a moment. Printer prints: a paper slip steps out from under the printer in fourteen jerky increments, exactly like a thermal printer, carrying the verse, the QR, and a vermilion stamp.
- **Catch Mahishasura.** A red light runs a ring of thirty-six segments with a gold gap of three. Tap the ring or press space. In the gap: "Caught, halfway out of the buffalo." Outside it: "Missed. He became a lion." The forms cycle buffalo, lion, man with a sword, elephant. Each catch speeds him up. The gap moves after every attempt.

### Ambient motion, kept to three

- The Konark wheel in the hero turns once every four minutes. You notice it only if you stop.
- The river's three dashed lines drift at different speeds, one against the current.
- The ripples at visarjan spread and fade every five seconds.

### The one page-load moment

The verse arrives word by word, sixteen words over about three seconds, then the gloss, then SARATHI. Nothing else animates in on scroll. No section fades up, no card lifts on hover.

### Sound

The prototype synthesizes a conch, a bell, and a bowstring so the interactions are complete. The real page uses your recorded shankha sample and short recordings of the actual bell and bow, about 60 KB each. Sound only ever plays after a tap. A small mute control near the ring remembers its state for the session only, in memory, never in storage, which keeps the page true to "collects nothing."

### Reduced motion

If the visitor has asked their device for less motion, the verse is simply there, the wheel is still, the lamps light without flicker, the river does not drift, the ring shows its states as steady levels, and the slip appears without the stepping. Everything still works.

---

## 4. Storyboard

| Section | Image | Motion | Copy |
|---|---|---|---|
| Now strip | none | none | Event line, ticket link, "Scanned a slip?" |
| Hero | A behind the verse | Verse arrives, wheel turns | Verse, gloss, SARATHI, subtitle |
| Chapter one | A full width, B C D triptych | none | Black Rock City recap, the Nachiketa line |
| Chapter two | Pleated band, E full width | Ring glow inside E breathes | Durga Puja, Mahishasura, "the chariot stands still" |
| At the pandal | the live ring | Lift the conch sequence, river, her line | Ask, Call, Light, Play, Give, Take |
| 108 lamps | the tray | Tap to light, first lamp self-lights | One line, the count |
| On the table | F beside the table | Six object reactions, the slip prints | One line per object |
| Catch Mahishasura | the game ring | The game | Two lines of rules, the messages |
| The verses | none, or H small | Soft glow on the Devanagari | Both verses in three lines each |
| Visarjan | I, the reflection | Ripples, ring embers | The farewell, আসছে বছর আবার হবে |
| Footer | none | none | Disclaimer verbatim, attribution, credits, dates |

---

## 5. Fast on one bar of signal

The slip QR will be scanned inside a crowded warehouse. The page has to open on a bad connection or the QR is decoration.

- Initial load under 500 KB: photo A under 130 KB, fonts under 120 KB, HTML with CSS and script under 60 KB. Everything below the hero is lazy.
- All motion is SVG and CSS transforms. No animation library, no framework, no video above the fold.
- If you want the Runway loop of the ring at night, put it far down the page, muted, `preload="none"`, poster image from G, under 1.5 MB, and skip it entirely when the browser sends Save-Data.
- Width and height on every image so nothing jumps while it loads.
- Test the finished page on a phone with Wi-Fi off and two bars, from the QR, before printing the slips.

---

## 6. What must not change

The page was built under the Burning Man API Terms of Service and Decompression is a Burning Man Project event, so the discipline holds.

- The disclaimer sentence stays verbatim, in its bordered block.
- No Burning Man logo, Man imagery, or event branding anywhere on the page or in any photo.
- No Veynqor name, logo, product mention, or navigation beyond the URL. Nothing for sale, no advertising, no sign-up, no analytics.
- The privacy claims are rewritten, not deleted, so that they are true on the night: your voice never leaves the device, only the text of the question crosses, only while the conch is lifted, announced out loud, and SARATHI keeps no copy.

---

## 7. Decisions I need from you

1. **Publish the Decompression chapter now, marked "Proposed"?** I recommend yes. Flipping to "At" on acceptance is one word.
2. **Martel and Martel Sans.** They are the right pairing for a page whose hero is Devanagari, and they are free. Say if you would rather keep the current typeface.
3. **Sound on the page.** The synthesized stand-ins can be replaced with your recorded shankha and real bell and bow. Or the page can stay silent and leave the sounds for the pandal. I lean toward sound, gated behind the tap.
4. **The ring over the render, or the ring in its own column.** The prototype shows the column version. Layering the live ring over render E is prettier and slightly more work.
5. **Name the hosted model provider** once fixed, or keep "a hosted model."
6. **Sri Sri Playa in the credits.**
7. **The TV.** Decided in chat, not in the form. It gets a spec row only if it is coming.
8. **A post-event pass** with the three extra photographs and the real lamp count.

---

## 8. Rollout

**Pass A, this week.** Tense, embargo clause removed, meta tags, chapter one recap. Ships regardless of acceptance. No new images needed.

**Pass B, by 26 September, or on acceptance if sooner.** The full redesign from the prototype with stand-ins where photos are still missing: chapter two, the ring, the river, the lamps, the table, the game, the verses, visarjan. Fonts self-hosted. This is the version the slips point to.

**Pass C, image production, 26 September to 10 October.** Shoot B, C, D, and F once the objects exist. Generate E, G, I, J. Choose H. Replace stand-ins. Then the signal test from the QR, on a phone, Wi-Fi off. Print slips only after that passes.

**Pass D, 18 to 20 October.** The three post-event photographs, the real lamp count, the Now strip changed to past tense.

**Deployment.** The Vercel project is not Git-connected. The page is a single `index.html` plus an `assets/` folder for images, fonts, and sounds. Commit to `veynqor-website/sarathi/` so main stays the source of truth, then `vercel --prod` from that folder. Leave the marketing project's Ignored Build Step alone. Verify with `curl.exe -I https://sarathi.veynqor.com` and one look on a phone.

---

## 9. Asset checklist

- [ ] Photo A, the rig at dusk, no Man in frame
- [ ] Photos B, C, D from the playa gear at home
- [ ] Renders E, G, I, J from Nano Banana with the questionnaire image as reference
- [ ] Photo F once the conch cradle, bow, bell, and tray exist
- [ ] Durga print H, public domain, with source noted in the footer
- [ ] Martel and Martel Sans woff2, subset, self-hosted
- [ ] Shankha, bell, and bow recordings, under 60 KB each
- [ ] QR at high error correction, root URL, test print at 2 cm
- [ ] Signal test from the QR on a phone with Wi-Fi off
- [ ] Post-event: offering board, full tray, wide shot

---

## Appendix: draft copy not shown in the prototype

The prototype carries the hero, both chapters, At the pandal, the lamps, the table, the game, the verses, visarjan, and the footer as draft copy. These sections complete the page.

### How it works (spec list)

| Label | Text |
|---|---|
| Computer | NVIDIA Jetson Orin Nano, battery powered, worn on the chest |
| Hearing | Four-microphone array with echo cancellation on a steel chest plate. Speech transcribed on-device. |
| Thinking, at home | A small quantized language model running locally, with retrieval over a text corpus stored on the device. |
| Thinking, across the river | A hosted language model, reached only while the conch is lifted. |
| Voices | Two. The charioteer, synthesized locally, and Durga, a second voice. |
| Hands | A conch on a cradle switch, a bow with a piezo pickup, a brass bell, a tray of 108 lamps, and a game, all read by one microcontroller. |
| Light | A ring of 60 LEDs, the discus. |
| Paper | A small thermal printer that prints the verse your question landed on. |
| Position | A USB GNSS receiver, read locally only. It stays in the pack for the indoor show. |
| Network | None by default. One request opens when the conch is lifted, is announced out loud, and closes when she has answered. |
| Safety | A deterministic filter in front of both voices keeps it family-friendly. |

### What it collects

> By itself, nothing. There are no accounts, no logging, and no analytics. Audio is transcribed in memory and discarded. The 108 lamps count questions, not people.
>
> When you lift the conch, one thing changes. The text of your question, and only that, is sent over the venue's network to a hosted language model, and her answer comes back. Your voice never leaves the chest. SARATHI keeps no copy of what it sent. What the provider does with that text is governed by the provider's own terms, which is exactly why SARATHI asks first and announces it out loud. Put the conch down and nothing else is sent all night.
>
> When the battery dies, the day is gone.

### What it costs

> Nothing, to anyone, ever. SARATHI is a gift. It is not a product, it is not for sale, it carries no advertising, and it is not a demonstration of anything anybody sells. Decompression is a ticketed Burning Man Project event. The ticket is theirs. SARATHI takes nothing.

### Meta tags

- `title`: SARATHI 2: Calling Durga
- `description`: SARATHI is a free wearable voice companion that rode through Black Rock City fully offline. At Bay Area Decompression on October 17 it calls Durga: lift the conch, the question crosses the river, a second voice answers. No accounts, no logging, nothing for sale.
- `og:title`: SARATHI 2: Calling Durga
- `og:description`: A wearable charioteer with a second voice. The Loom, Oakland, October 17, 2026.
- `og:image`: slot J
