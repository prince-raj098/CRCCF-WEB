import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryHero from '../components/gallery/GalleryHero'
import GalleryCategoryGrid from '../components/gallery/GalleryCategoryGrid'
import GalleryFooterQuote from '../components/gallery/GalleryFooterQuote'
import GalleryAnimatedBg from '../components/gallery/GalleryAnimatedBg'

export default function GalleryPage() {
  const categoryImages = [
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/a86e66dfa_generated_b06e8f70.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/14024feb9_generated_be8043d0.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/41d80063f_generated_ee62a935.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/cd99b2cbe_generated_fd487187.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/9676c4c3d_generated_77243b6c.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/4b478b14f_generated_12c36e15.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/ec6ec2898_generated_764bf641.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/07c69415b_generated_54f8afc2.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/420e42652_generated_cca0721e.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/24bd5e374_generated_93784628.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/a5c3ea6f3_generated_004bc0e4.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/530471ed2_generated_b7ef040e.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/f8ff0a29c_generated_14407da9.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/096b624c0_generated_0e6d6180.png",
    "https://media.base44.com/images/public/69e89f547154ba3350c8414c/a5c3ea6f3_generated_004bc0e4.png",
  ];

  return (
    <div className="gallery-page-root">
      <TopBar />
      <Navbar />

      {/* Page body */}
      <div className="gallery-page-body">
        <GalleryAnimatedBg />
        <div className="gallery-page-content">
          <GalleryHero />
          <GalleryCategoryGrid images={categoryImages} />
          <GalleryFooterQuote />
          <div style={{ height: 32 }} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
