import os
from PIL import Image, ImageFilter, ImageDraw
import numpy as np

poster_dir = 'public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters'
files = [f'{i} Framed.png' for i in range(1, 11)]

# 1. Crop each frame cleanly
cropped_frames = []
for f in files:
    p = os.path.join(poster_dir, f)
    im = Image.open(p).convert('RGBA')
    arr = np.array(im)
    mask = np.any(arr[:, :, :3] < 240, axis=2)
    coords = np.argwhere(mask)
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0)
    cropped = im.crop((x0, y0, x1+1, y1+1))
    cropped_frames.append(cropped)

# Let's create an artful composite showing the full set of 10 posters
# Canvas size: 1400 wide x 1100 high
canvas_w, canvas_h = 1400, 1100
canvas = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))

# We have 10 frames.
# Let's arrange them in a layered gallery arrangement:
# Back row: 5 frames slightly smaller, staggered
# Front row: 3-4 frames slightly larger, prominent
# Or a fanned stack:
# Let's test a balanced composition:
# Front hero: frame 0 (or frame 4)
# Left stack: frames 1, 2, 3
# Right stack: frames 5, 6, 7
# Plus frames 8, 9 partially visible

# Let's scale frames to a clean height:
target_h = 750
scaled_frames = [f.resize((int(f.width * target_h / f.height), target_h), Image.Resampling.LANCZOS) for f in cropped_frames]

def add_shadow(img, blur=15, offset=(0, 12), opacity=120):
    shadow = Image.new('RGBA', (img.width + blur*4, img.height + blur*4), (0, 0, 0, 0))
    # make a black silhouette of img alpha
    alpha = img.split()[3]
    black = Image.new('L', img.size, 0)
    sil = Image.merge('RGBA', (black, black, black, alpha))
    shadow.paste(sil, (blur*2 + offset[0], blur*2 + offset[1]))
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    # adjust opacity
    r, g, b, a = shadow.split()
    a = a.point(lambda p: int(p * (opacity / 255.0)))
    shadow = Image.merge('RGBA', (r, g, b, a))
    return shadow, blur*2

# Let's layer them from back to front:
# Positions: (index, x_center, y_bottom, scale, angle)
# We can lay out 5 in the back, 3 in the mid, and 2 in the front, or similar.
# Back tier: 5 posters
# Mid tier: 3 posters
# Front tier: 2 posters (Total = 10 posters!)
# That literally shows ALL 10 POSTERS in the mockup!

tiers = [
    # Back row (5 posters, scaled to 0.72)
    (8, 220, 800, 0.70),
    (9, 440, 780, 0.70),
    (7, 700, 770, 0.70),
    (6, 960, 780, 0.70),
    (5, 1180, 800, 0.70),
    
    # Mid row (3 posters, scaled to 0.85)
    (3, 330, 890, 0.85),
    (4, 1070, 890, 0.85),
    (2, 700, 870, 0.85),
    
    # Front row (2 hero posters, scaled to 0.98)
    (0, 520, 980, 0.96),
    (1, 880, 980, 0.96)
]

for idx, xc, yb, sc in tiers:
    frm = scaled_frames[idx]
    w = int(frm.width * sc)
    h = int(frm.height * sc)
    resized = frm.resize((w, h), Image.Resampling.LANCZOS)
    
    # Create shadow
    sh, pad = add_shadow(resized, blur=18, offset=(0, 10), opacity=110)
    canvas.paste(sh, (xc - w//2 - pad, yb - h - pad), sh)
    canvas.paste(resized, (xc - w//2, yb - h), resized)

# Add subtle overall contact grounding shadow at the bottom
ground_shadow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
draw = ImageDraw.Draw(ground_shadow)
# Draw dark oval under front posters
draw.ellipse([300, 960, 1100, 1010], fill=(0, 0, 0, 160))
ground_shadow = ground_shadow.filter(ImageFilter.GaussianBlur(12))
canvas = Image.alpha_composite(ground_shadow, canvas)

# Trim transparent bounds
bbox = canvas.getbbox()
final_im = canvas.crop((bbox[0], max(0, bbox[1]-20), bbox[2], min(canvas_h, bbox[3]+20)))

output_path = 'public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Poster_Collection_Set_10.png'
final_im.save(output_path, 'PNG')
print('Saved to', output_path, 'size:', final_im.size)
