import React from "react";
import ProductPreview from "components/ProductPreview";

class ProductList extends React.Component {
    getProductList() {
        const productList = [];
        this.props.productEdges.forEach(product => {
            productList.push({
                path: product.node.fields.slug,
                cover: product.node.frontmatter.cover,
                title: product.node.frontmatter.title,
                category: product.node.frontmatter.category,
                shortDesc: product.node.frontmatter.shortDesc,
                date: product.node.fields.date,
                slug: product.node.fields.slug,
            });
        });
        return productList;
    }
    render() {
        const productList = this.props.productEdges? this.getProductList() : null;
        if (productList) {
            return (
                <div>
                    {productList.map(product => (
                        <div className="row">
                            <ProductPreview key={product.title} productInfo={product}/>
                            
                        </div>
                    ))}
                </div>
            );
        } 
    }
}

export default ProductList;