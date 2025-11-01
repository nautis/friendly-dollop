# Telling Time - Ghost Theme

A Ghost CMS theme that replicates the design of the Telling Time WordPress site, based on the Mura WordPress theme.

## Overview

This Ghost theme was created to duplicate the look, feel, and layout of your WordPress-based Telling Time watch blog. It maintains the clean, modern, card-based design while adapting it to Ghost's Handlebars templating system.

## What Was Successfully Replicated

### ✅ Design & Layout
- **Grid-based homepage** with featured hero post
- **Card-based post displays** with hover effects
- **Multi-column layouts** (2, 3, and 4 column grids)
- **Category-based sections** (Watch reviews, Industry news, Videos, History of Watchmaking)
- **Responsive design** that works on mobile, tablet, and desktop
- **Clean typography** matching the original theme
- **Color scheme** from Mura theme (can be customized)

### ✅ Templates
- **Homepage (index.hbs)** - Featured posts, category sections with "View More" links
- **Single Post (post.hbs)** - Full article layout with featured image, tags, author bio, related posts
- **Page (page.hbs)** - Static page template
- **Tag Archive (tag.hbs)** - Category/tag listing pages
- **Author Archive (author.hbs)** - Author profile and posts

### ✅ Features
- **Sticky navigation header**
- **Mobile-responsive menu** with slide-out sidebar
- **Search functionality** with slide-out sidebar
- **Back to top button**
- **Author bios** on posts
- **Related posts** section
- **Post metadata** (date, author, reading time, tags)
- **Footer with multiple columns**

## Ghost Theme Limitations vs WordPress

### ⚠️ Features NOT Available in Ghost

1. **No WordPress Customizer** - Ghost uses a different approach:
   - Theme settings are in `package.json` under `config.custom`
   - Colors must be changed in CSS variables
   - No visual customizer interface (must edit code)

2. **No Sidebar Widgets** - Ghost doesn't have a widget system:
   - The theme doesn't include traditional sidebars
   - All content is defined in templates, not widgets

3. **No PHP Custom Logic** - Ghost uses Handlebars (HTML templating):
   - Complex conditional logic is more limited
   - Custom post types require custom content management

4. **No Page Builders** - Ghost doesn't support:
   - Elementor, Divi, or other drag-and-drop builders
   - All layouts must be coded in templates

5. **Limited Plugin Ecosystem**:
   - No WooCommerce (ecommerce requires third-party integrations)
   - No contact forms (need external services)
   - Comments require third-party service (Disqus, etc.)

6. **Home Blocks Plugin** - The Mura "Home Blocks" feature is replaced by:
   - Ghost's `{{#get}}` helper to fetch posts by tag
   - Sections are hardcoded in `index.hbs` template

## Installation

### 1. Upload Theme to Ghost

```bash
# Zip the theme folder
cd ghost-tellingtime
zip -r telling-time-ghost.zip .

# Upload via Ghost Admin
# Settings → Design → Upload theme → Select zip file
```

### 2. Activate the Theme

After uploading, click "Activate" to make it your active theme.

### 3. Configure Theme Settings

In Ghost Admin → Settings → Design → Site-wide settings, you can configure:
- **Grid Columns**: Choose 2, 3, or 4 columns for post grids
- **Show Featured Post**: Toggle large hero post on homepage
- **Navigation Layout**: Logo positioning options

## Required Setup

### 1. Create Tags for Category Sections

For the homepage sections to work properly, create these tags in Ghost Admin:

- `watch-reviews` - For watch review posts
- `industry-news` - For industry news posts
- `videos` - For video content
- `history` - For history of watchmaking posts

### 2. Set Up Navigation

1. Go to Ghost Admin → Settings → Navigation
2. Add your primary navigation items
3. Optionally add secondary navigation for footer links

### 3. Add Your Logo

1. Go to Ghost Admin → Settings → General
2. Upload your site logo
3. The theme will display it in the header

### 4. Configure Site Settings

- **Site Title**: Your blog name
- **Site Description**: Appears in footer and meta tags
- **Publication Icon**: Browser favicon
- **Publication Cover**: Not used by this theme, but good to set

## Customization Guide

### Changing Colors

Edit `/assets/css/style.css` and modify the CSS variables:

```css
:root {
    --white: #ffffff;
    --black: #000000;
    --accent-red: #d32f2f;  /* Change this to your preferred accent color */
    --dark-grey: #44464b;
    /* etc. */
}
```

### Changing Grid Columns

In Ghost Admin → Settings → Design → Theme settings, or edit `package.json`:

```json
"grid_columns": {
    "type": "select",
    "options": ["2", "3", "4"],
    "default": "3"
}
```

### Modifying Homepage Sections

Edit `/index.hbs` to:
- Change the order of sections
- Modify which tags appear in sections
- Change the number of posts per section
- Add or remove sections

Example:
```handlebars
{{#get "posts" limit="6" filter="tag:your-tag" include="tags,authors"}}
    {{#foreach posts}}
        {{> "post-card"}}
    {{/foreach}}
{{/get}}
```

### Customizing Post Card Layout

Edit `/partials/post-card.hbs` to change:
- Thumbnail sizes
- Excerpt length
- Metadata displayed
- Card structure

## Key Differences from WordPress Mura Theme

| Feature | Mura (WordPress) | Telling Time (Ghost) |
|---------|------------------|---------------------|
| Customizer | ✅ Visual customizer | ❌ Edit CSS/templates |
| Widgets | ✅ Widget areas | ❌ No widget system |
| Post Formats | ✅ 10+ formats | ⚠️ Limited support |
| Masonry Layout | ✅ Built-in option | ⚠️ Would need JS library |
| WooCommerce | ✅ Full support | ❌ Not available |
| Custom Templates | ✅ Per-page selection | ⚠️ Via custom routes |
| Color Options | ✅ 100+ color controls | ⚠️ Must edit CSS |
| Typography Options | ✅ Font selection | ⚠️ Must edit CSS |

## Template Structure

```
ghost-tellingtime/
├── package.json          # Theme configuration
├── default.hbs           # Base layout (header, footer)
├── index.hbs             # Homepage template
├── post.hbs              # Single post template
├── page.hbs              # Static page template
├── tag.hbs               # Tag archive template
├── author.hbs            # Author archive template
├── partials/
│   └── post-card.hbs     # Reusable post card component
└── assets/
    ├── css/
    │   └── style.css     # All theme styles
    └── js/
        └── main.js       # Theme JavaScript
```

## Ghost Helpers Used

This theme uses the following Ghost helpers:

- `{{#get}}` - Fetch posts by filter criteria
- `{{#foreach}}` - Loop through posts
- `{{navigation}}` - Display navigation menus
- `{{pagination}}` - Display pagination links
- `{{img_url}}` - Generate responsive images
- `{{content}}` - Display post content
- `{{excerpt}}` - Display post excerpt
- `{{reading_time}}` - Show estimated reading time
- `{{date}}` - Format dates

## Migration from WordPress

### Content Migration

1. **Export from WordPress**:
   - Install Ghost's WordPress plugin
   - Export content from WordPress Admin

2. **Import to Ghost**:
   - Ghost Admin → Settings → Labs
   - Import content → Select exported file

3. **Fix Image URLs**:
   - Ghost will download images from WordPress
   - Check image paths after import

### Tag Mapping

Map your WordPress categories to Ghost tags:

- Category: "Watch Reviews" → Tag: `watch-reviews`
- Category: "Industry News" → Tag: `industry-news`
- Category: "Videos" → Tag: `videos`
- Category: "History" → Tag: `history`

## Performance Optimizations

This theme includes:

- ✅ Responsive images with `{{img_url}}` helper
- ✅ CSS Grid for efficient layouts
- ✅ Minimal JavaScript (no jQuery dependency)
- ✅ CSS custom properties for easy theming
- ✅ Optimized hover effects and transitions

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Homepage sections not showing posts

**Problem**: Sections appear empty
**Solution**: Make sure you've created the required tags and assigned them to posts

### Images not displaying correctly

**Problem**: Images appear broken or stretched
**Solution**: Check that feature images are set on posts, and use appropriate image sizes

### Menu not appearing

**Problem**: Navigation is empty
**Solution**: Configure navigation in Ghost Admin → Settings → Navigation

### Search not working

**Problem**: Search doesn't return results
**Solution**: Ghost search is built-in, but may need to rebuild search index

## Support & Updates

This theme was created specifically for migrating the Telling Time WordPress site to Ghost. For questions or issues:

1. Check Ghost documentation: https://ghost.org/docs/themes/
2. Review Ghost theme structure: https://ghost.org/docs/themes/structure/
3. Ghost Handlebars helpers: https://ghost.org/docs/themes/helpers/

## License

This theme is provided as-is for use with the Telling Time blog.

## Credits

- **Original Design**: Mura WordPress Theme by 3FortyMedia
- **Adaptation**: Ghost theme conversion for Telling Time
- **Platform**: Ghost CMS (https://ghost.org)

---

**Note**: This Ghost theme successfully replicates the visual design and layout of your WordPress site, but some WordPress-specific features (customizer, widgets, plugins) are not available in Ghost. The theme focuses on delivering a clean, modern blog experience optimized for content creators.
