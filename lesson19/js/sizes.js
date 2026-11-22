export const sizes = () => {
    const sizesList = document.querySelector('[data-sizes="list"]');
    const sizesButtons = document.querySelectorAll('[data-sizes="button"]');

    const handleSizeClick = (event) => {
        const target = event.target;

        if (!target?.classList.contains("product__item-stock")) return;

        sizesButtons.forEach((button) =>
            button.classList.remove("product__item-stock--active")
        );
        target.classList.add("product__item-stock--active");
    };

    sizesList.addEventListener("click", handleSizeClick);
};