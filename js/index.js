const handleNewsCategories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    const newsCategory = data.data.news_category;
    newsCategory.slice(0, 3).forEach(news => {
        const newsContainer = document.getElementById('news-container');
        const newsName = news.category_name;
        const div = document.createElement('div');
        div.innerHTML = `<a onclick="handleLoadNews('${news.category_id}')" class="tab tab-active">${newsName}</a>`
        newsContainer.appendChild(div)
    });
    console.log(newsCategory);
}
const handleLoadNews = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();
    const newsCategory = data.data;
    console.log(newsCategory);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    newsCategory.forEach(news => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `<div class="card  bg-base-100 shadow-xl p-5">
    <figure><img src="${news.image_url}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${news.title.slice(0, 40)}</h2>
      <p>${news.details.slice(0, 100)}</p>
      <p>Total views: ${news.total_view ? news.total_view : 'no views'}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    </div>` ;
        cardContainer.appendChild(cardDiv);

    });

}
handleNewsCategories()
handleLoadNews('01')


