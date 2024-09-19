function generatePaginationData(currentPage, totalPages) {
    const paginationData = {
      currentPage,
      totalPages,
      pages: [],
      hasPrevious: currentPage > 1,
      hasNext: currentPage < totalPages
    };
  
    let startPage, endPage;
  
    if (totalPages <= 3) {
      // when total pages less than 3 so showing all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 3 pages
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }
  
    for (let i = startPage; i <= endPage; i++) {
      paginationData.pages.push(i);
    }
  
    return paginationData;
  }

  export default generatePaginationData