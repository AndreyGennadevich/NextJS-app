import {TopLevelCategory, TopPageModel} from "../../intefaces/page.interface";
import {ProductModel} from "../../intefaces/product.interface";

export interface TopPageComponentProps {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}