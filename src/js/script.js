const search_input = document.getElementById('input-search');
const result_artist = document.getElementById('result-artist');
const result_playlist = document.getElementById('section__playlist-cards')

function request_api(search_term) {
    const url = `http://localhost:3000/artists?name_like=${search_term}`;
    
    fetch(url)
        .then((resp) => resp.json())
        // .then((result) => display_artists(result));
}

function display_artists(artists) {
    artists.foreach((artist) => {

    })
}

document.addEventListener('input', function() {
    const search_term = search_input.value.toLowerCase();
    if (search_term === '') {
        result_playlist.classList.add('hidden');
        result_artist.classList.remove('hidden');
        return;
    }

    request_api(search_term);
})