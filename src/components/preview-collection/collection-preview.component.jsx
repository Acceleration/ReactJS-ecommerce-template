import React from 'react';
import toAdobeData from '../../redux/cart/adobeData/toAdobeData';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

// const CollectionPreview = ({ title, items }) => (
//     <div className='collection-preview' >
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <div className='preview'>
//             {items
//                 .filter((item, idx) => idx < 4)
//                 .map((item) => (
//                     <CollectionItem key={item.id} item={item} category={title} />
//                 ))}
//         </div>
//     </div>
// )

class CollectionPreview extends React.Component {
    pageProductContribution = null
    relevantItems = this.props.items.slice(0, 4)
    category = this.props.title
    componentDidMount() {
        console.log('mounting CollectionsPreview')
        console.log(this.props.items)
        const category = this.category
        const trackingContribution = this.relevantItems.map(item => toAdobeData({ ...item, category }))
        window.digitalData.product = window.digitalData.product.concat(trackingContribution)
    }

    componentWillUnmount() {
        const category = this.category
        const allTrackedProducts = window.digitalData.product

        window.digitalData.product = allTrackedProducts.filter(({ category: { primaryCategory } }) => primaryCategory !== category)

        console.log('unmounting CollectionsPreview')
    }

    render() {
        return (<div className='collection-preview' >
            <h1 className='title'>{this.props.title.toUpperCase()}</h1>
            <div className='preview'>
                {this.relevantItems
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} category={this.category} />
                    ))}
            </div>
        </div>)
    }
}

export default CollectionPreview