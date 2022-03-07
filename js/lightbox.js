

/**
 * @property {HTMLElement} element
 * @property {string[]} gallery Chemins des images de la lightbox
 * @property {string} url Image actuelement affiché
 */
class Lightbox 
{
    
    static init () 
    {
        const links = Array.from(document.querySelectorAll('a[href$= ".png"], a[href$= ".jpg"], a[href$= ".jpeg"]'))
        const gallery = links.map(link => link.getAttribute('href'));


            links.forEach(link => link.addEventListener('click', e => 
            {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'), gallery);
            }))
    }
    /**
     * 
     * @param {string} url URL de l'image
     * @param {string[]} gallery Chemins des images de la lightbox
     */
    constructor (url, gallery)
    {
        this.element = this.buildDOM(url);
        this.gallery = gallery
        this.loadImage(url);
        this.onKeyUp = this.onKeyUp.bind(this);
        document.body.appendChild(this.element);
        document.addEventListener('keyup', this.onKeyUp);
    }
    /**
     * 
     * @param {string} url URL de l'image
     */
    loadImage (url)
    {
        this.url = null
        const image = new Image();
        const container = this.element.querySelector('.lightbox_container')
        container.innerHTML = '';
        const loader = document.createElement('div')
        loader.classList.add('lightbox_loader')
        container.appendChild(loader)


        image.onload = () =>
        {
            container.removeChild(loader)
            container.appendChild(image)
            this.url = url
        }
        image.src = url;
    }

    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onKeyUp (e)
    {
        if(e.key === 'Escape')
        {
            this.close(e);
        } else if(e.key === 'ArrowLeft')
        {
            this.prev(e);
        } else if(e.key === 'ArrowRight')
        {
            this.next(e);
        }
    }

    

    /**
     * Ferme la lightbox
     * @param {MouseEvenet/KeyboardEvent} e 
     */
    close (e)
    {
        e.preventDefault();
        this.element.classList.add('fadeOut');
        window.setTimeout(() => 
        {
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp);

    }
    /**
     * 
     * @param {MouseEvenet/KeyboardEvent} e 
     */
    next (e)
    {
        e.preventDefault();
        let i = this.gallery.findIndex(image => image === this.url);
        if(i === this.gallery.length - 1) { i = -1}
        this.loadImage(this.gallery[i + 1]);
    }
    /**
     * 
     * @param {MouseEvenet/KeyboardEvent} e 
     */
    prev (e)
    {
        e.preventDefault();
        let i = this.gallery.findIndex(image => image === this.url);
        if(i === 0) { i = this.gallery.length}
        this.loadImage(this.gallery[i - 1]);
    }


    /**
     * 
     * @param {string} url URL de l'image
     * @return {HTMLElement}
     */
    buildDOM (url) 
    {
        const dom = document.createElement("div");
        dom.classList.add("lightbox");
        dom.innerHTML = `
            <button class="lightbox_close"><i class="fas fa-times"></i></button>
            <button class="lightbox_prev"><i class="fas fa-chevron-circle-left"></i></button>
            <button class="lightbox_next"><i class="fas fa-chevron-circle-right"></i></button>
            <div class="lightbox_container"></div>`

        dom.querySelector('.lightbox_close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox_prev').addEventListener('click', this.prev.bind(this))
        dom.querySelector('.lightbox_next').addEventListener('click', this.next.bind(this))
        return dom;
    }
}



/*
    <div class="lightbox">
      <button class="lightbox_close"><i class="fas fa-times"></i></button>
      <button class="lightbox_prev"><i class="fas fa-chevron-circle-left"></i></button>
      <button class="lightbox_next"><i class="fas fa-chevron-circle-right"></i></button>
      <div class="lightbox_container">
        <img src="img/test-bandeau.JPG" alt="">
      </div>
    </div>
*/

Lightbox.init();