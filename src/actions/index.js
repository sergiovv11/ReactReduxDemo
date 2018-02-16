export function selectBook(book) {
    // Returns an action (objet with a type property)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}