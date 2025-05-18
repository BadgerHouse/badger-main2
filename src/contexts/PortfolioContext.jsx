import { createContext, useContext, useState } from 'react';
import staticItems from '../data/portfolioItems';

// Medya dosyalarını import et
const allMedia = import.meta.glob('../assets/projects/*/*.{jpg,jpeg,png,mp4}', { eager: true });

// Thumbnail'i getir
const getThumbnail = (folderName) => {
  try {
    return new URL(`../assets/projects/${folderName}/thumbnail.jpeg`, import.meta.url).href;
  } catch {
    return null;
  }
};

// Klasördeki medya dosyalarını getir (thumbnail hariç)
const getMediaByFolder = (folderName) => {
  const mediaList = Object.keys(allMedia)
    .filter(
      path =>
        path.includes(`/projects/${folderName}/`) &&
        !path.toLowerCase().endsWith('thumbnail.jpeg')
    )
    .map(path => {
      const url = allMedia[path].default;
      const type = url.endsWith('.mp4') ? 'video' : 'image';
      return { url, type };
    });

  mediaList.sort((a, b) => a.url.localeCompare(b.url)); // Dosya adına göre sırala
  return mediaList;
};

// 3D klasöründen her video için ayrı item oluştur
const getAll3DItems = () => {
  const folderName = '3d';

  const mediaItems = Object.keys(allMedia)
    .filter(
      path =>
        path.includes(`/projects/${folderName}/`) &&
        path.toLowerCase().endsWith('.mp4')
    )
    .map((path, index) => {
      const url = allMedia[path].default;
      return {
        id: `3d-${index}`,
        title: `3D Billboard ${index + 1}`,
        folder: folderName,
        type: '3d',
        media: [{ url, type: 'video' }],
        description: '',
      };
    });

  return mediaItems;
};

// Context oluştur
const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [modalData, setModalData] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const openModal = (item) => {
    const media = item.media || getMediaByFolder(item.folder);
    if (!media || media.length === 0) return;
    setModalData({ ...item, media });
    setSlideIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = 'auto';
  };

  // Dinamik olarak 3d + other işleri birleştir
  const portfolioItems = [
    ...getAll3DItems(),
    ...staticItems
  ];

  return (
    <PortfolioContext.Provider
      value={{
        portfolioItems,
        getThumbnail,
        modalData,
        slideIndex,
        setSlideIndex,
        openModal,
        closeModal,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
