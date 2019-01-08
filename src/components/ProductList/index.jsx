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
                // shortDesc: product.node.frontmatter.shortDesc,
                excerpt: product.node.excerpt,
                date: product.node.fields.date,
                slug: product.node.fields.slug,
                // templateKey: postEdge.node.frontmatter.templateKey,
            });
        });
        return productList;
    }
    render() {
        const productList = this.props.productEdges? this.getProductList() : null;
        if (productList) {
            return (
                <div className="container">
                    <div className="row">
                        {productList.map((product, i=0) => (
                            <div className="col-lg-4 col-md-6 mt-4 mb-4" key={product.title}>
                                <ProductPreview  productInfo={product} />
                            </div>
                        ))}
                    </div>
                </div>
            );
        } 
    }
}

export default ProductList;