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

        this.section.addEventListener('click', this.openModal);
        this.closeBtn.addEventListener('click', this.closeModal);
    }
    openModal(e) {
        if (e.target.classList.contains('img')) {
            this.setImages(e.target, this.images);
        }
        if (e.target.classList.contains('img-container')) {
            this.setImages(e.target.querySelector('.img'), this.images);
        }
    }
    closeModal() {
        this.modal.classList.remove('open');
    }
    setImages(selectedImage, images) {
        this.mainImg.src = selectedImage.src;
        this.mainImgTitle.textContent = selectedImage.title;
        this.modalImagesContainer.innerHTML = images
            .map(function (image) {
                return `<img src="${image.src}" title="${image.title}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" data-id="${image.dataset.id}" alt="nature image" />`;
            })
            .join('');
        this.modal.classList.add('open');
    }
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
