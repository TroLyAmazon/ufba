//Tìm Kiếm Nhanh
function launchSearch(event) {
    document.getElementById('searchBar___container').classList.add("activeSearch");
  }
  
  document.getElementById('closeSearchBar').addEventListener('click', function() {
    document.getElementById('searchBar___container').classList.remove("activeSearch");
    
  });