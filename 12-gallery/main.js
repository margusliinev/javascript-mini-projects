function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check "${selection}" selector, no such element exists`);
    }
}

class Gallery {
    constructor(section) {
        this.section = section;
        this.images = [...section.querySelectorAll('.img')];
        this.modal = getElement('.modal');
        this.mainImg = getElement('.main-img');
        this.mainImgTitle = getElement('.main-img-title');
        this.modalImagesContainer = getElement('.modal-images');
        this.closeBtn = getElement('.close-btn');
        this.nextBtn = getElement('.next-btn');
        this.prevBtn = getElement('.prev-btn');

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);

        this.section.addEventListener(
            'click',
            function (e) {
                if (e.target.classList.contains('img')) {
                    this.openModal(e.target, this.images);
                }
                if (e.target.classList.contains('img-container')) {
                    this.openModal(e.target.querySelector('.img'), this.images);
                }
            }.bind(this)
        );
    }
    openModal(selectedImage, images) {
        this.mainImg.src = selectedImage.src;
        this.mainImgTitle.textContent = selectedImage.title;
        this.modalImagesContainer.innerHTML = images
            .map(function (image) {
                return `<img src="${image.src}" title="${image.title}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" data-id="${image.dataset.id}" alt="nature image" />`;
            })
            .join('');
        this.modal.classList.add('open');
        this.closeBtn.addEventListener('click', this.closeModal);
        this.nextBtn.addEventListener('click', this.nextImage);
        this.prevBtn.addEventListener('click', this.prevImage);
    }
    closeModal() {
        this.modal.classList.remove('open');
        this.closeBtn.removeEventListener('click', this.closeModal);
        this.nextBtn.removeEventListener('click', this.nextImage);
        this.prevBtn.removeEventListener('click', this.prevImage);
    }
    nextImage() {
        const selected = this.modalImagesContainer.querySelector('.selected');
        const next = selected.nextElementSibling || this.modalImagesContainer.firstElementChild;
        selected.classList.remove('selected');
        next.classList.add('selected');
        this.mainImg.src = next.src;
        this.mainImgTitle.textContent = next.title;
    }
    prevImage() {
        const selected = this.modalImagesContainer.querySelector('.selected');
        const previous = selected.previousElementSibling || this.modalImagesContainer.lastElementChild;
        selected.classList.remove('selected');
        previous.classList.add('selected');
        this.mainImg.src = previous.src;
        this.mainImgTitle.textContent = previous.title;
    }
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
