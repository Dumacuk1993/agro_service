window.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.news_page_item-text_title')   
    const descriptions = document.querySelectorAll('.news_page_item-text_text') 

    titles.forEach((title) => {
        console.log(title.textContent);
        
        if (title.textContent.length > 40) {
            title.textContent = title.textContent.slice(0, 40) + '...'    
        }   
    })
    
    descriptions.forEach((description) => {
        if (description.textContent.length > 60) {
            description.textContent = description.textContent.slice(0, 60) + '...'
        }   
    })
})