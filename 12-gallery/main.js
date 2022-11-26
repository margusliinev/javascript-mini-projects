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
        this.images = [...section.querySelectorAll('.img-container')];
        this.modal = getElement('.modal');
        this.mainImg = getElement('.main-img');
        this.modalImagesContainer = getElement('.modal-images');
        this.closeBtn = getElement('.close-btn');
        this.nextBtn = getElement('.next-btn');
        this.prevBtn = getElement('.prev-btn');

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.section.addEventListener('click', this.openModal);
        this.closeBtn.addEventListener('click', this.closeModal);
    }
    openModal() {
        this.modal.classList.add('open');
    }
    closeModal() {
        this.modal.classList.remove('open');
    }
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
