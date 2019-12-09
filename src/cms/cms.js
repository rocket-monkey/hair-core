import CMS from 'netlify-cms'

import ProductsPagePreview from './preview-templates/ProductsPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import PricesStorePagePreview from './preview-templates/PricesPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('products', ProductsPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('prices', PricesStorePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
