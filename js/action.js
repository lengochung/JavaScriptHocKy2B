

const action = ( function () {
    return {
        return_inforsearch_empty: function () {
            for (const iterator of document.getElementsByClassName('btninfor')) {
                iterator.getElementsByTagName('span')[0].innerText = '';
                iterator.getElementsByTagName('img')[0].src = '';
                iterator.getElementsByTagName('h5')[0].src = '';
                iterator.getElementsByTagName('h6')[0].src = '';
                iterator.style.display = 'none';
            }
        },
        return_inforsearch_display: function () {
            for (const iterator of document.getElementsByClassName('btninfor')) {
                iterator.style.display = '';
            }
        },
        searchproduct: function () {
            this.return_inforsearch_empty();
            let search = document.getElementById('searchDr');
            let infor = document.getElementById('inforsearch');
            if ( search.value == '' ) {
               this.return_inforsearch_empty(); 
            } else {
                this.return_inforsearch_display();
                let index = 0;
                for (const iterator of document.getElementsByClassName('card-title')) {
                    if ( iterator.innerText.toLowerCase().search(search.value) >= 0 ) {
                        let img = iterator.parentElement.nextElementSibling;
                        // document.getElementsByClassName('btninfor')[0].innerText = img;
                        document.getElementsByClassName('btninfor')[index].getElementsByTagName('span')[0].innerText = iterator.innerText;
                        document.getElementsByClassName('btninfor')[index].getElementsByTagName('img')[0].src = img.src;
                        document.getElementsByClassName('btninfor')[index].getElementsByTagName('h5')[0].innerText = img.nextElementSibling.getElementsByTagName('span')[0].innerText;
                        document.getElementsByClassName('btninfor')[index].getElementsByTagName('h6')[0].innerText = 'VNĐ';
                        index++;
                    }
                }
                while (11 - index >= 0) {
                    document.getElementsByClassName('btninfor')[index].style.display = 'none';
                    index++;
                }
            }
        }
    }
} )();
// 
export { action };
