#!/usr/bin/env python3
"""Generate the 1200x630 Open Graph share image.

Usage: python3 scripts/generate-og-image.py
Output: public/og-image.png
"""

import math
import os
import random

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "og-image.png")

FONT_DIR = "/usr/share/fonts/truetype/liberation"
BOLD = os.path.join(FONT_DIR, "LiberationSans-Bold.ttf")
REGULAR = os.path.join(FONT_DIR, "LiberationSans-Regular.ttf")
MONO = os.path.join(FONT_DIR, "LiberationMono-Regular.ttf")

BG_TOP = (15, 23, 42)       # slate-900
BG_BOTTOM = (30, 41, 59)    # slate-800
ACCENT = (96, 165, 250)     # blue-400
ACCENT_2 = (45, 212, 191)   # teal-400
INK = (241, 245, 249)       # slate-100
MUTED = (148, 163, 184)     # slate-400


def font(path, size):
    return ImageFont.truetype(path, size)


def draw_gradient(img):
    draw = ImageDraw.Draw(img)
    for y in range(HEIGHT):
        t = y / (HEIGHT - 1)
        color = tuple(
            round(BG_TOP[i] + (BG_BOTTOM[i] - BG_TOP[i]) * t) for i in range(3)
        )
        draw.line([(0, y), (WIDTH, y)], fill=color)


def draw_neural_motif(img):
    """Subtle node/link graph echoing the site's hero background."""
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    rng = random.Random(7)
    nodes = [(rng.randint(60, WIDTH - 60), rng.randint(60, HEIGHT - 60)) for _ in range(26)]
    for i, a in enumerate(nodes):
        for b in nodes[i + 1 :]:
            if math.dist(a, b) < 210:
                draw.line([a, b], fill=(96, 165, 250, 26), width=1)
    for x, y in nodes:
        r = rng.choice([3, 4, 5, 6])
        draw.ellipse([x - r, y - r, x + r, y + r], fill=(45, 212, 191, 70))
    img.alpha_composite(overlay)


def centered(draw, text, f, y, fill):
    left, top, right, bottom = draw.textbbox((0, 0), text, font=f)
    draw.text(((WIDTH - (right - left)) / 2 - left, y), text, font=f, fill=fill)
    return bottom - top


def main():
    img = Image.new("RGBA", (WIDTH, HEIGHT), BG_TOP)
    draw_gradient(img)
    draw_neural_motif(img)

    draw = ImageDraw.Draw(img)

    # Accent rule above the name
    draw.line([(WIDTH / 2 - 40, 150), (WIDTH / 2 + 40, 150)], fill=ACCENT_2, width=5)

    centered(draw, "David T. Wells", font(BOLD, 92), 180, INK)
    centered(draw, "Senior Software Engineer", font(REGULAR, 46), 310, ACCENT)
    centered(
        draw,
        "Data Platforms  ·  Analytics  ·  Full-Stack  ·  AI Orchestration",
        font(REGULAR, 30),
        400,
        MUTED,
    )
    centered(draw, "davidwellsthedeveloper.com", font(MONO, 28), 500, ACCENT_2)

    img.convert("RGB").save(OUT, "PNG", optimize=True)
    print(f"Wrote {OUT} ({os.path.getsize(OUT)} bytes)")


if __name__ == "__main__":
    main()
