from PIL import Image, ImageFilter

poster_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Clean_Framed_Poster_Transparent.png')
cards_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Cards_Tray.png')
coloring_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Coloring Book.png')
book_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Book_Clean.png')
wb_raw = Image.open('public/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Workbook_Clean.png')

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

W, H = 820, 640
baseline = 636
canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))

# 1. Poster in Background
post_h = 575
post_w = int(post_h * (poster_raw.width / poster_raw.height))
poster_scaled = poster_raw.resize((post_w, post_h), Image.Resampling.LANCZOS)
post_x = 180 # centered-left behind books
post_y = baseline - post_h
paste_with_shadow(canvas, poster_scaled, post_x, post_y, offset=(0, 6), blur_radius=16, opacity=0.5)

# 2. Affirmation Cards (Far Left)
c_h = 225
c_w = int(c_h * (cards_raw.width / cards_raw.height))
cards_scaled = cards_raw.resize((c_w, c_h), Image.Resampling.LANCZOS)
c_x = 25
c_y = baseline - c_h
paste_with_shadow(canvas, cards_scaled, c_x, c_y, offset=(3, 5), blur_radius=8, opacity=0.45)

# 3. Coloring Book (Left)
cb_h = 295
cb_w = int(cb_h * (coloring_raw.width / coloring_raw.height))
cb_scaled = coloring_raw.resize((cb_w, cb_h), Image.Resampling.LANCZOS)
cb_x = 175
cb_y = baseline - cb_h
paste_with_shadow(canvas, cb_scaled, cb_x, cb_y, offset=(3, 6), blur_radius=10, opacity=0.45)

# 4. Hardcover Book (Center-Right Hero)
b_h = 330
b_w = int(b_h * (book_raw.width / book_raw.height))
b_scaled = book_raw.resize((b_w, b_h), Image.Resampling.LANCZOS)
b_x = 345
b_y = baseline - b_h
paste_with_shadow(canvas, b_scaled, b_x, b_y, offset=(4, 7), blur_radius=14, opacity=0.6)

# 5. Workbook (Far Right)
wb_h = 315
wb_w = int(wb_h * (wb_raw.width / wb_raw.height))
wb_scaled = wb_raw.resize((wb_w, wb_h), Image.Resampling.LANCZOS)
wb_x = 565
wb_y = baseline - wb_h
paste_with_shadow(canvas, wb_scaled, wb_x, wb_y, offset=(4, 6), blur_radius=12, opacity=0.5)

# Render on dark green shelf
bg_color = (6, 24, 15, 255)
comp = Image.new('RGBA', (W, H + 40), bg_color)
comp.paste(canvas, (0, 0), canvas)
shelf = Image.new('RGBA', (W, 16), (20, 50, 30, 255))
comp.paste(shelf, (0, baseline))
comp.save('scratch/preview_5_products.png')
print("preview_5_products.png created successfully")
