import os
from PIL import Image, ImageFilter

poster_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Clean_Framed_Poster_Transparent.png')
book_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Book_Clean.png')
wb_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Workbook_Clean.png')
coloring_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Coloring Book.png')

def paste_with_shadow(canvas, img, x, y, offset=(0, 8), blur_radius=12, opacity=0.45):
    # Shadow
    alpha = img.split()[-1]
    shadow_mask = alpha.point(lambda p: int(p * opacity))
    shadow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    black = Image.new('RGBA', img.size, (0, 0, 0, 255))
    shadow.paste(black, (0, 0), shadow_mask)
    
    pad = blur_radius * 2
    expanded = Image.new('RGBA', (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
    expanded.paste(shadow, (pad + offset[0], pad + offset[1]))
    blurred = expanded.filter(ImageFilter.GaussianBlur(blur_radius))
    
    # Paste shadow
    canvas.paste(blurred, (x - pad, y - pad), blurred)
    # Paste img
    canvas.paste(img, (x, y), img)

def generate_option_1():
    # Centered poster, realistic book scale (books ~320px, poster ~560px), zero clipped edges
    W, H = 680, 650
    canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    
    # 1. Poster
    post_h = 560
    post_w = int(post_h * (poster_raw.width / poster_raw.height))
    poster_scaled = poster_raw.resize((post_w, post_h), Image.Resampling.LANCZOS)
    post_x = (W - post_w) // 2
    post_y = H - post_h
    paste_with_shadow(canvas, poster_scaled, post_x, post_y, offset=(0, 6), blur_radius=15, opacity=0.5)
    
    # 2. Coloring Book (left)
    cb_h = 300
    cb_w = int(cb_h * (coloring_raw.width / coloring_raw.height))
    cb_scaled = coloring_raw.resize((cb_w, cb_h), Image.Resampling.LANCZOS)
    cb_x = 45 # Generous margin from left edge!
    cb_y = H - cb_h
    paste_with_shadow(canvas, cb_scaled, cb_x, cb_y, offset=(4, 6), blur_radius=10, opacity=0.4)
    
    # 3. Workbook (right)
    wb_h = 310
    wb_w = int(wb_h * (wb_raw.width / wb_raw.height))
    wb_scaled = wb_raw.resize((wb_w, wb_h), Image.Resampling.LANCZOS)
    wb_x = W - wb_w - 45 # Generous margin from right edge!
    wb_y = H - wb_h
    paste_with_shadow(canvas, wb_scaled, wb_x, wb_y, offset=(-4, 6), blur_radius=10, opacity=0.4)
    
    # 4. Hardcover Book (center, slightly forward)
    b_h = 335
    b_w = int(b_h * (book_raw.width / book_raw.height))
    b_scaled = book_raw.resize((b_w, b_h), Image.Resampling.LANCZOS)
    b_x = (W - b_w) // 2
    b_y = H - b_h
    # Stronger shadow so it visibly separates from the coloring book and workbook behind its edges!
    paste_with_shadow(canvas, b_scaled, b_x, b_y, offset=(0, 8), blur_radius=14, opacity=0.6)
    
    # Save
    canvas.save('scratch/option_1.png')

def generate_option_2():
    # Poster slightly offset to the left, revealing more of the framed poster artwork,
    # and books staggered dynamically across the shelf
    W, H = 700, 650
    canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    
    # Poster
    post_h = 570
    post_w = int(post_h * (poster_raw.width / poster_raw.height))
    poster_scaled = poster_raw.resize((post_w, post_h), Image.Resampling.LANCZOS)
    post_x = 70 # Offset to left
    post_y = H - post_h
    paste_with_shadow(canvas, poster_scaled, post_x, post_y, offset=(0, 6), blur_radius=15, opacity=0.5)
    
    # Coloring book on far left
    cb_h = 300
    cb_w = int(cb_h * (coloring_raw.width / coloring_raw.height))
    cb_scaled = coloring_raw.resize((cb_w, cb_h), Image.Resampling.LANCZOS)
    cb_x = 35
    cb_y = H - cb_h
    paste_with_shadow(canvas, cb_scaled, cb_x, cb_y, offset=(3, 6), blur_radius=10, opacity=0.4)
    
    # Center Hardcover Book
    b_h = 330
    b_w = int(b_h * (book_raw.width / book_raw.height))
    b_scaled = book_raw.resize((b_w, b_h), Image.Resampling.LANCZOS)
    b_x = 210
    b_y = H - b_h
    paste_with_shadow(canvas, b_scaled, b_x, b_y, offset=(4, 8), blur_radius=14, opacity=0.6)
    
    # Workbook on the right (partially outside the poster frame, revealing both the poster and the workbook clearly!)
    wb_h = 320
    wb_w = int(wb_h * (wb_raw.width / wb_raw.height))
    wb_scaled = wb_raw.resize((wb_w, wb_h), Image.Resampling.LANCZOS)
    wb_x = 430
    wb_y = H - wb_h
    paste_with_shadow(canvas, wb_scaled, wb_x, wb_y, offset=(4, 8), blur_radius=12, opacity=0.5)
    
    canvas.save('scratch/option_2.png')

generate_option_1()
generate_option_2()
print("Options 1 and 2 generated")
