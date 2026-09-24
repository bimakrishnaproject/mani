from PIL import Image, ImageFilter
import numpy as np

poster_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Clean_Framed_Poster_Transparent.png')
book_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Book_Clean.png')
wb_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Workbook_Clean.png')
coloring_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Coloring Book.png')
cards_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Cards_Tray.png')

def paste_with_shadow(canvas, img, x, y, offset=(0, 6), blur_radius=12, opacity=0.55):
    alpha = img.split()[-1]
    shadow_mask = alpha.point(lambda p: int(p * (opacity if p > 50 else 0)))
    shadow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    black = Image.new('RGBA', img.size, (0, 0, 0, 255))
    shadow.paste(black, (0, 0), shadow_mask)
    
    pad = blur_radius * 2
    expanded = Image.new('RGBA', (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
    expanded.paste(shadow, (pad + offset[0], pad + offset[1]))
    blurred = expanded.filter(ImageFilter.GaussianBlur(blur_radius))
    
    canvas.paste(blurred, (x - pad, y - pad), blurred)
    canvas.paste(img, (x, y), img)

# Variation 1: Clean 3-Book Trio + Framed Poster (Poster elevated and clearly readable, books separated)
def make_v1():
    W, H = 720, 640
    baseline = 636
    canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    
    # 1. Poster: Large, elegant in background
    post_h = 570
    post_w = int(post_h * (poster_raw.width / poster_raw.height))
    poster_scaled = poster_raw.resize((post_w, post_h), Image.Resampling.LANCZOS)
    post_x = 100 # slightly left of center
    post_y = baseline - post_h
    paste_with_shadow(canvas, poster_scaled, post_x, post_y, offset=(0, 6), blur_radius=16, opacity=0.5)
    
    # 2. Coloring Book (far left)
    cb_h = 300
    cb_w = int(cb_h * (coloring_raw.width / coloring_raw.height))
    cb_scaled = coloring_raw.resize((cb_w, cb_h), Image.Resampling.LANCZOS)
    cb_x = 40
    cb_y = baseline - cb_h
    paste_with_shadow(canvas, cb_scaled, cb_x, cb_y, offset=(3, 6), blur_radius=10, opacity=0.45)
    
    # 3. Hardcover Book (center)
    b_h = 330
    b_w = int(b_h * (book_raw.width / book_raw.height))
    b_scaled = book_raw.resize((b_w, b_h), Image.Resampling.LANCZOS)
    b_x = 225
    b_y = baseline - b_h
    paste_with_shadow(canvas, b_scaled, b_x, b_y, offset=(4, 7), blur_radius=14, opacity=0.6)
    
    # 4. Workbook (right)
    wb_h = 315
    wb_w = int(wb_h * (wb_raw.width / wb_raw.height))
    wb_scaled = wb_raw.resize((wb_w, wb_h), Image.Resampling.LANCZOS)
    wb_x = 450
    wb_y = baseline - wb_h
    paste_with_shadow(canvas, wb_scaled, wb_x, wb_y, offset=(4, 6), blur_radius=12, opacity=0.5)
    
    canvas.save('scratch/variation_1.png')

# Variation 2: Full 5-Item Set (Poster, 3 Books, Cards Tray)
def make_v2():
    W, H = 760, 640
    baseline = 636
    canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    
    # Poster
    post_h = 575
    post_w = int(post_h * (poster_raw.width / poster_raw.height))
    poster_scaled = poster_raw.resize((post_w, post_h), Image.Resampling.LANCZOS)
    post_x = 130
    post_y = baseline - post_h
    paste_with_shadow(canvas, poster_scaled, post_x, post_y, offset=(0, 6), blur_radius=16, opacity=0.5)
    
    # Cards Tray (far left)
    c_h = 220
    c_w = int(c_h * (cards_raw.width / cards_raw.height))
    cards_scaled = cards_raw.resize((c_w, c_h), Image.Resampling.LANCZOS)
    c_x = 35
    c_y = baseline - c_h
    paste_with_shadow(canvas, cards_scaled, c_x, c_y, offset=(3, 5), blur_radius=8, opacity=0.45)
    
    # Coloring book
    cb_h = 295
    cb_w = int(cb_h * (coloring_raw.width / coloring_raw.height))
    cb_scaled = coloring_raw.resize((cb_w, cb_h), Image.Resampling.LANCZOS)
    cb_x = 175
    cb_y = baseline - cb_h
    paste_with_shadow(canvas, cb_scaled, cb_x, cb_y, offset=(3, 6), blur_radius=10, opacity=0.45)
    
    # Hardcover Book
    b_h = 325
    b_w = int(b_h * (book_raw.width / book_raw.height))
    b_scaled = book_raw.resize((b_w, b_h), Image.Resampling.LANCZOS)
    b_x = 320
    b_y = baseline - b_h
    paste_with_shadow(canvas, b_scaled, b_x, b_y, offset=(4, 7), blur_radius=14, opacity=0.6)
    
    # Workbook
    wb_h = 310
    wb_w = int(wb_h * (wb_raw.width / wb_raw.height))
    wb_scaled = wb_raw.resize((wb_w, wb_h), Image.Resampling.LANCZOS)
    wb_x = 515
    wb_y = baseline - wb_h
    paste_with_shadow(canvas, wb_scaled, wb_x, wb_y, offset=(4, 6), blur_radius=12, opacity=0.5)
    
    canvas.save('scratch/variation_2.png')

make_v1()
make_v2()

# Render previews on dark green
bg_color = (6, 24, 15, 255)
for v in ['variation_1', 'variation_2']:
    fg = Image.open(f'scratch/{v}.png')
    comp = Image.new('RGBA', (fg.width, fg.height + 40), bg_color)
    comp.paste(fg, (0, 0), fg)
    shelf = Image.new('RGBA', (fg.width, 16), (20, 50, 30, 255))
    comp.paste(shelf, (0, 636))
    comp.save(f'scratch/preview_shelf_{v}.png')

print("Done generating variations")
