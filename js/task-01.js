const totalCategoies = document.querySelectorAll('li.item');
console.log(`Number of categories: ${totalCategoies.length}`);
console.log('');
const titleAndQuantity = totalCategoies.forEach(item => {
    console.log('Category: ', item.firstElementChild.textContent);
    console.log('Elements: ', item.querySelector('ul').children.length);
    console.log('');
})
