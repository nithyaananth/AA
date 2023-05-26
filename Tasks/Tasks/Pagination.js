
function createPagination(currentPage, totalPages) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
  
    const paginationList = document.createElement('ul');
    paginationList.classList.add('pagination');
  
    // Create previous button
    const previousButton = createPaginationButton('Previous', currentPage - 1);
    paginationList.appendChild(previousButton);
  
    // Create page buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = createPaginationButton(i, i);
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
      paginationList.appendChild(pageButton);
    }
  
    // Create next button
    const nextButton = createPaginationButton('Next', currentPage + 1);
    paginationList.appendChild(nextButton);
  
    paginationContainer.appendChild(paginationList);
  }
  
      console.log('Page clicked:', page);
 
    listItem.appendChild(link);
    return listItem;

  
 
