import { useOutletContext, useParams } from "react-router-dom";

export const Product = () => {
    const { products } = useOutletContext()
    const { id } = useParams();

    const findProduct = products.find((p) => p.id === +id)

    return (
        <section className="content">
            <div className="container">
                {findProduct ?
                    <div className="content-box">
                        <div className="content-product">
                            <div className="content-product_left">
                                <h2 className="content-product_title">{findProduct.title}</h2>
                                <img className="content-product_img" src={findProduct.img} alt="product-img" />
                                <p className="content-product_text">
                                    {findProduct.description}
                                </p>
                            </div>
                            <div className="content-product_right">
                                <h2 className="content-product_price">{findProduct.price}</h2>
                                <button className="btn btn-primary btn-product">
                                    <span className="product-btn_text">Показать телефон</span>
                                </button>
                            </div>
                        </div>
                        <div className="content-side">
                            <h3 className="content-side_title">Сервисы и услуги</h3>
                            <div className="content-side_list">
                                <div className="content-side_list-item">
                                    <img className="content-side_list-item-img" src="/image/side-info-1.svg" alt="side-info-1" />
                                    <h3 className="content-side_list-item-title">Доставка</h3>
                                    <p className="content-side_list-item-text">
                                        Проверка при получении и возможность бесплатно вернуть товар
                                    </p>
                                </div>
                                <div className="content-side_list-item">
                                    <img className="content-side_list-item-img" src="/image/side-info-2.svg" alt="side-info-2" />
                                    <h3 className="content-side_list-item-title">Автотека</h3>
                                    <p className="content-side_list-item-text">
                                        Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                    </p>
                                </div>
                                <div className="content-side_list-item">
                                    <img className="content-side_list-item-img" src="/image/side-info-3.svg" alt="side-info-3" />
                                    <h3 className="content-side_list-item-title">Онлайн-бронирование жилья</h3>
                                    <p className="content-side_list-item-text">
                                        Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                                    </p>
                                </div>
                            </div>
                            <div className="content-side_footer">
                                <p className="content-side_footer-item">
                                    © ООО «Абито», 2011–2021
                                </p>
                                <a href="#!" className="content-side_footer-item">
                                    Политика конфиденциальности
                                </a>
                                <a href="#!" className="content-side_footer-item">
                                    Обработка данных
                                </a>
                            </div>
                        </div>
                    </div>
                    :
                    <h2>такого товара не существует.</h2>
                }

            </div>
        </section>
    )
}