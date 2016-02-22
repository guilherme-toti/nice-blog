# Nice-Blog theme
This is the theme used in my pelican blog
http://www.guilhermetoti.com.br

# Screenshot
![Theme screenshot](screenshot.png)

# Extras

Pages can have subtitles, just add:
```
Subtitle: Put your subtitle here
```

Articles can have one cover image, just add:
```
Image: image_name.extension
```
*Image must be on `/content/images*

# Settings

**This settings must be on `pelicanconf.py`**

Change theme color
```
THEME_COLOR = 'blue'
```
*Available colors is on `/static/css/colors`*

To select what to show on sidebar
```
SIDEBAR_DISPLAY = ['about', 'categories', 'tags']
```

The text in sidebar About
```
SIDEBAR_ABOUT = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quae hic dicta eius ad quam eligendi minima praesentium voluptatum? Quidem quaerat eaque libero velit impedit dicta, repudiandae sapiente. Deserunt, excepturi."
```