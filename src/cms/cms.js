import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import PricesStorePagePreview from './preview-templates/PricesPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPostPreview from './preview-templates/ProductPostPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('prices', PricesStorePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('product', ProductPostPreview)
