const categoriesHolder = document.getElementById('categorias_compu_2')

let categories = ['Nuevo', 'Ropa', 'Accsesorios', 'Descuentos', 'Fiesta']

categories.forEach(category => {
        categoriesHolder.innerHTML += `<li><a href="#" onclick='filterByCategory("${category}")'>${category}</a></li>`
    })


function filterByCategory(category) {
    productHolder.innerHTML = ''    
    filteredProducts = products.filter(product => product.category == category)
    filteredProducts.forEach(product => {
        productHolder.innerHTML += product.asInnerHTMLForMainList()
    })
}
