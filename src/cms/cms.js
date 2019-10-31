import CMS from 'netlify-cms'

import SpiritPagePreview from './preview-templates/SpiritPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import StorePagePreview from './preview-templates/StorePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('spirit', SpiritPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('store', StorePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
