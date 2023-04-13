import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const nextBtnMarkup = `
        <button data-goto="${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button> 
    `;

    const prevBtnMarkup = `
        <button data-goto="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
    `;

    if (currentPage === 1 && numPages > 1) {
      return nextBtnMarkup;
    }

    if (currentPage === numPages && numPages > 1) {
      return prevBtnMarkup;
    }

    if (currentPage < numPages) {
      return `
        ${prevBtnMarkup}
        ${nextBtnMarkup}
      `;
    }

    return '';
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      // closest() method returns the closest ancestor of the current element
      // (or the current element itself) which matches the selectors given in parameter.
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
