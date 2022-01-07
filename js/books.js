
//load data from api using Search book button...........
const bookLoad = () => {
    const searchText = document.getElementById('inputField');
    const searchValue = searchText.value;
    searchText.value = " ";
    spinner('block');
    spinnerSearch('none')
    const url = `https://openlibrary.org/search.json?q=${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data.docs))
}
// bookLoad('react')
//spinner function........
const spinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const spinnerSearch = displayStyle => {
    document.getElementById('dis').style.display = displayStyle;
}
//display laaded data .........
const displayData = (books) => {
    //console.log(books);
    const display = document.getElementById('display-info');
    const section = document.getElementById('dis');
    display.textContent = '';
    //validation section but can't work ..
    if (!books || books.length == 0) {
        const creeateH2 = document.createElement('h2');
        creeateH2.innerText = "can not find any Result";
        section.appendChild(creeateH2);
    }
    else {
        books?.forEach(book => {
            const createDiv = document.createElement('div');
            createDiv.classList.add('col');
            createDiv.innerHTML = `
          <div class="card h-100">
           <img style="height:300px"  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">

                <div class="card-body">
                    <strong>BookName :</strong>  ${book.title ? book.title : ''}<br>
                    <strong>AuthorName :</strong>  ${book.author_name ? book.author_name : ''}<br>
                    <strong>Publisher :</strong>  ${book.publisher ? book.publisher : ''}<br>
                    <strong>Language :</strong>  ${book.language ? book.language : ''}<br>
                    <strong>PlaceOfPublish :</strong>  ${book.publish_place ? book.publish_place : ''}<br>
                    <strong>FirstPublishYear :</strong>  ${book.first_publish_year ? book.first_publish_year : ''}<br>
                    
                </div>
            </div>`
            display.appendChild(createDiv)//append and display....
        });
        //validation.........
        spinner('none');
        spinnerSearch('block')
    }

}


