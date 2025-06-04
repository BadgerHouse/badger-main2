import { createContext, useContext, useState } from 'react';
import markaItems from '../data/markaItems';
import threeDItems from '../data/3dItems';

// Yalnızca webp ve webm uzantılı medya dosyalarını al
const allMedia = import.meta.glob('../assets/projects/*/*/*.{webp,webm}', { eager: true });

// Thumbnail bulma - önce .webp varsa onu al, yoksa .webm al
const getThumbnailFromGlob = (folderName, type) => {
  const allPaths = Object.keys(allMedia);

  const candidateWebp = allPaths.find(path =>
    path.includes(`/projects/${type}/${folderName}/`) &&
    path.toLowerCase().includes('thumbnail') &&
    path.endsWith('.webp')
  );

  const candidateWebm = allPaths.find(path =>
    path.includes(`/projects/${type}/${folderName}/`) &&
    path.toLowerCase().includes('thumbnail') &&
    path.endsWith('.webm')
  );

  const selected = candidateWebp || candidateWebm;

  return selected ? allMedia[selected].default : null;
};

// Hem .webp hem .webm dosyalarını getir, sadece thumbnail olmayanları
const getThreeDMedia = (folderName) => {
  const mediaList = Object.keys(allMedia)
    .filter(path =>
      path.includes(`/projects/3d/${folderName}/`) &&
      !path.toLowerCase().includes('thumbnail')
    )
    .map(path => {
      const url = allMedia[path].default;
      const type = url.endsWith('.webm') ? 'video' : 'image';
      return { url, type };
    });

  mediaList.sort((a, b) => a.url.localeCompare(b.url));
  return mediaList;
};

const getMarkaMedia = (folderName) => {
  const mediaList = Object.keys(allMedia)
    .filter(path =>
      path.includes(`/projects/marka/${folderName}/`) &&
      !path.toLowerCase().includes('thumbnail')
    )
    .map(path => {
      const url = allMedia[path].default;
      const type = url.endsWith('.webm') ? 'video' : 'image';
      return { url, type };
    });

  mediaList.sort((a, b) => a.url.localeCompare(b.url));
  return mediaList;
};

// 3D işlere thumbnail ve type ekle
const enrichedThreeDItems = threeDItems.map((item) => ({
  ...item,
  thumbnail: getThumbnailFromGlob(item.folder, '3d'),
  type: '3d'
}));

// Marka işlerine thumbnail ve type ekle
const enrichedMarkaItems = markaItems.map((item) => ({
  ...item,
  thumbnail: getThumbnailFromGlob(item.folder, 'marka'),
  type: 'other'
}));

// Hepsini birleştir
const portfolioItems = [...enrichedThreeDItems, ...enrichedMarkaItems];

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [modalData, setModalData] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const openModal = (item) => {
    let media = [];

    if (item.type === '3d') {
      media = getThreeDMedia(item.folder);
    } else if (item.type === 'other') {
      media = getMarkaMedia(item.folder);
    }

    if (!media || media.length === 0) return;

    setModalData({ ...item, media });
    setSlideIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = 'auto';
  };

  const goToPreviousItem = () => {
    if (!modalData) return;

    const filteredItems = portfolioItems.filter(i => i.type === modalData.type);
    const currentIndex = filteredItems.findIndex(i => i.id === modalData.id);

    if (currentIndex === -1) return;

    const newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    openModal(filteredItems[newIndex]);
  };

  const goToNextItem = () => {
    if (!modalData) return;

    const filteredItems = portfolioItems.filter(i => i.type === modalData.type);
    const currentIndex = filteredItems.findIndex(i => i.id === modalData.id);

    if (currentIndex === -1) return;

    const newIndex = (currentIndex + 1) % filteredItems.length;
    openModal(filteredItems[newIndex]);
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioItems,
        getThreeDMedia,
        getMarkaMedia,
        getThumbnail: getThumbnailFromGlob,
        modalData,
        slideIndex,
        setSlideIndex,
        openModal,
        closeModal,
        goToPreviousItem,
        goToNextItem
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
