# Nice-Blog theme
This is the theme use in my pelican blog https://github.com/guilherme-toti/nice-blog

# Screenshot
![Theme screenshot](screenshot.png) ![Theme screenshot](screenshot2.png)

# Blogs Using Nice-Blog

https://blog.colacoweb.net

# Extras

### Pages can have subtitles, just add:
```
Subtitle: Put your subtitle here
```

### Articles can have one cover image, just add:
```
Image: image_name.extension
```
**Image must be on `/content/images`**

### Article image gallery:
```
gallery:<galleryname>
```
**Images must be on** `./content/images/gallery/<galleryname>`

## Settings

**This settings must be on `pelicanconf.py`**

### Change theme color:
```
THEME_COLOR = 'blue'
```
**Available colors is on `./static/css/colors`**

### Menu left side Logo: 

```
LOGO = 'logo.extension'
```
**If No logo specified, Blog title will be used instead.**
**Logo must be inside **`./content/images`

### To select what to show on sidebar:
```
SIDEBAR_DISPLAY = ['about', 'categories', 'tags']
```

### The text in sidebar About:
```
SIDEBAR_ABOUT = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quae hic dicta eius ad quam eligendi minima praesentium voluptatum? Quidem quaerat eaque libero velit impedit dicta, repudiandae sapiente. Deserunt, excepturi."
```

### Copyright text:
```
COPYRIGHT = "Text Here "
```

### To enable gallery plugin support:
```
PLUGINS_PATHS = ['PluginsRelativePath', 'or/absolute/path/to/plugins/dir']
PLUGINS = ['gallery']
GALLERY_PATH = 'images/gallery/'
```

### To enable Piwik analytics support:
```
#Piwik mandatory variables
DOMAIN = "yourdomain.com"
PIWIK_URL = "//analytics.address.com"
PIWIK_SITE_ID ="ID_NUMBER"
```
**PIWIK_URL should be as in the example without http: or https:**

### To enable Piwik tracking code options:

```
#Track visitors across all subdomains
TRACK_SUBDOMAINS = True

#Prepend the site domain to the page title when tracking
PREPEND_DOMAIN = True

#In the "Outlinks" report, hide clicks to know alias URLs
HIDE_CLICK_KNOWN_ALIAS = True

#Track users with JavaScript disabled
TRACK_NO_JAVA = True
```

**Did you like nice-blog? do you use it on your pelican blog?**

let us know or just add it to README.MD and make a pull request

**Want to help out and contribute?**

make a pull request, open an issue, let others know about this project ... there are plenty of ways to contribute, if you want to, just do it!
